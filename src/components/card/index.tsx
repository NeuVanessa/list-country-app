import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import styled from "styled-components/native";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  DetailCountry: {
    image: string;
    name: string;
  };
};

const { width } = Dimensions.get("window");
const isMobile = width < 768;

interface CountryData {
  name: string;
  image: any;
  population: any;
  region: any;
  capital: any;
  subregion: any;
  tld: any;
  currencies: any;
  languages: any;
  borders: any;
}

interface CountryListProps {
  data: CountryData[];
}

const CountryList = ({ data }: CountryListProps) => {
  const numColumns = Dimensions.get("window").width < 768 ? 1 : 4;
  type detailScreenProp = StackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<detailScreenProp>();
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(item) => item.capital}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DetailCountry", {
                name: item.name,
                population: item.population,
                region: item.region,
                capital: item.capital,
                image: item.image,
                subregion: item.subregion,
                tld: item.tld,
                currencies: item.currencies,
                languages: item.languages,
                borders: item.borders,
              })
            }
          >
            <StyledView>
              <StyledImage source={{ uri: item.image }} />
              <StyledText>
                <SubtitleText style={{ fontSize: 20 }}>
                  {item.name}
                </SubtitleText>
              </StyledText>
              <StyledText>
                <SubtitleText>População:</SubtitleText> {item.population}
              </StyledText>
              <StyledText>
                <SubtitleText>Região: </SubtitleText>
                {item.region}
              </StyledText>
              <StyledText>
                <SubtitleText>Capital:</SubtitleText> {item.capital}
              </StyledText>
            </StyledView>
          </TouchableOpacity>
        )}
        numColumns={numColumns}
      />
    </Container>
  );
};

export default CountryList;

const Container = styled.View`
  width: 87.5%;
  align-self: center;
  margin-top: ${isMobile ? "20px" : "60px"};
  justify-content: space-between;
  height: ${isMobile ? "400px" : null};
`;
const SubtitleText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  font-family: "NunitoRegular";
`;
const StyledView = styled.View`
  width: ${isMobile ? "360px" : "281px"};
  background-color: #ffffff;
  margin-horizontal: 10px;
  right: 10px;
  margin-bottom: 20px;
  elevation: 1;
  shadow-color: #474545;
  shadow-opacity: 0.3;
  shadow-radius: 2px;
`;

const StyledImage = styled.Image`
  height: 158px;
  width: ${isMobile ? "100%" : "281px"};
`;

const StyledText = styled.Text`
  margin-top: 14px;
  margin-left: 24px;
  margin-bottom: 14px;
  font-family: "NunitoRegular";
  font-weight: normal;
`;
