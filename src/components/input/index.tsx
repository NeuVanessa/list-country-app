import React, { useState } from "react";
import { Text, TouchableOpacity, Dimensions, View } from "react-native";
import styled from "styled-components/native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const { width } = Dimensions.get("window");

const isMobile = width < 768;

interface Props {
  onChangeText: (region: string) => void;
  label: string;
  searchName: string[];
  selectedRegion: (region: string) => void;
  detail: boolean;
  dataRest: string[];
  selectedName: string;
}

const SearchInput = ({ label, searchName, selectedRegion, detail }: Props) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const [isClearButtonPressed, setIsClearButtonPressed] = useState(false);

  const handleRegionChange = (region: string) => {
    setName(region);
  };

  useEffect(() => {
    if (name !== "") {
      selectedRegion(name);
    }
  }, [name, selectedRegion]);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (isClearButtonPressed) {
      setName("");
      setIsClearButtonPressed(false);
    }
  }, [isClearButtonPressed]);
  
  const renderDropdown = () => {
    if (visible) {
      return (
        <Dropdown>
          <TouchableOpacity onPress={() => setIsClearButtonPressed(true)}>
            <Text>Limpar campo</Text>
          </TouchableOpacity>

          {searchName.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => {
                handleRegionChange(item);
                setVisible(false);
              }}
            >
              <ButtonText style={{ color: "#0C1013" }}>{item}</ButtonText>
              <Line />
            </TouchableOpacity>
          ))}
        </Dropdown>
      );
    }
  };

  return (
    <SearchInputContainer>
      {detail === true ? (
        <ContainerDetail onPress={() => navigation.goBack()}>
          {renderDropdown()}
          <Icon
            type="font-awesome"
            name="chevron-left"
            color={"#474545"}
            size={12}
          />
          <ButtonText>{label}</ButtonText>
        </ContainerDetail>
      ) : (
        <>
          <InputField
            placeholder="Pesquise um país"
            onChangeText={(text) => setName(text)}
          />
          <FilterButton onPress={toggleDropdown}>
            {renderDropdown()}
            <ButtonText>{label}</ButtonText>
            <View style={{ left: 5 }}>
              <Icon
                type="font-awesome"
                name="chevron-down"
                color={"#474545"}
                size={12}
              />
            </View>
          </FilterButton>
        </>
      )}
    </SearchInputContainer>
  );
};

export default SearchInput;

const Line = styled.View`
  height: 2;
  background-color: "#e1e4e6";
`;

const Dropdown = styled.View`
  position: absolute;
  background-color: white;
  top: 50;
  width: 100%;
  z-index: 999999;
  elevation: 1;
  shadow-color: #474545;
  shadow-opacity: 1;
  shadow-radius: 2px;
`;
const SearchInputContainer = styled.View`
  flex-direction: ${isMobile ? "column" : "row"};
  align-items: center;
  width: ${isMobile ? "92%" : "80%"};
  justify-content: space-between;
  margin-left: ${isMobile ? "16px" : "83px"};
  margin-top: ${isMobile ? "30px" : "80px"};
`;

const ContainerDetail = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f9f9f9;
  height: 54px;
  width: ${isMobile ? "150px" : "10%"};
  font-family: "NunitoRegular";
  font-weight: normal;
  font-style: normal;
  align-items: center;
  align-self: center;
  justify-content: space-evenly;
  flex-direction: row;
  margin-left: ${isMobile ? "150px" : "0px"};
  margin-right: ${isMobile ? "350px" : "0px"};
  color: #474545;
`;
const InputField = styled.TextInput`
  padding: 10px;
  margin-right: ${isMobile ? "0" : "12px"};
  margin-bottom: ${isMobile ? "12px" : "0"};
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: white;
  height: 54px;
  width: ${isMobile ? "92%" : "42%"};
  font-family: "NunitoRegular";
  border-bottom-width: 0.5px;
  justify-content: center;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  shadow-radius: 4;
  elevation: 5;
`;

const ButtonText = styled(Text)`
  color: #474545;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  font-family: "NunitoRegular";
`;

const FilterButton = styled(TouchableOpacity)`
  /* padding-vertical: 10px;
  */
  border-radius: 4px;

  align-items: center;
  align-self: center;
  justify-content: center;
  padding-horizontal: 16px;
  left: ${isMobile ? "90px" : " 105px"};
  height: 54px;
  flex-direction: row;
  text-align: center;
  elevation: 1;
  shadow-color: #474545;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
`;
