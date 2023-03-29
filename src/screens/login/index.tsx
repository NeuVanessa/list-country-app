import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import CountryList from "../../components/card";
import Header from "../../components/header";
import Input from "../../components/input";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components/native";
import { View } from "react-native";

interface CountryData {
  name: string;
  image: any;
  population: any;
  region: any;
  capital: any;
}

export type RootStackParamList = {
  DetailCountry: {
    image: string;
    name: string;
  };
};

export default function Login() {
  const [data, setData] = useState<CountryData[]>([]);

  console.log(data, "retorno aqui");
  const [filteredData, setFilteredData] = useState<CountryData[]>([]);
  const [searchName, setSearchName] = useState("");
  const [loading, setLoading] = useState(false);

  const [countrie] = useState([
    { name: "Brazil" },
    { name: "France" },
    { name: "Germany" },
    { name: "Netherlands" },
  ]);

  console.log(searchName, "searchName");
  const countryJoin = countrie.map((item) => item.name);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await Promise.all(
        countrie.map((country) => api.get(`/${country.name}`))
      );

      const filteredData = data
        .filter((item) => item.data !== undefined)
        .map((item, idx) => {
          return {
            name: countrie[idx].name,
            image: item.data[0].flags.png,
            population: item.data[0].population,
            region: item.data[0].region,
            capital: item.data[0].capital[0],
            subregion: item.data[0].subregion,
            tld: item.data[0].tld,
            currencies: item.data[0].currencies,
            languages: item.data[0].languages,
            borders: item.data[0].borders,
          };
        });
      console.log(filteredData, "filteredData");
      setData(filteredData);
      await AsyncStorage.setItem("countries", JSON.stringify(filteredData));
      setLoading(false);
    };

    fetchData();
  }, [searchName]);

  const handleRegionChange = (region: string) => {
    setSearchName(region);
  };

  useEffect(() => {
    if (searchName === "") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((item) =>
          item.name.toLowerCase().includes(searchName.toLowerCase())
        )
      );
    }
  }, [data, searchName]);
  
  return (
    <Container>
      <Header title="Países" />
      <View
        style={{
          position: "relative",
          zIndex: 99999,
          backgroundColor: "#ffffff",
        }}
      >
        <Input

          label={"Filtrar por Região"}
          searchName={countryJoin}
          selectedRegion={handleRegionChange}
          detail={false}
        />
      </View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : filteredData.length === 0 ? (
        <NoResultsText>Nenhum resultado encontrado</NoResultsText>
      ) : (
        <View style={{ zIndex: 1, backgroundColor: "#ffffff" }}>
          <CountryList data={filteredData} />
        </View>
      )}
      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  width: 100%;
  background-color: #ffffff;
  height: 100%;
`;

const NoResultsText = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: #555;
  text-align: center;
  margin-top: 20px;
  font-family: "NunitoRegular";
`;
