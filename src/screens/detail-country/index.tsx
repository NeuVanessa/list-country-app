import React from "react";
import { Dimensions, SafeAreaView, ScrollView } from "react-native";
import styled from "styled-components/native";
import Header from "src/components/header";
import SearchInput from "src/components/input";

interface Props {
  title: string;
}

const { width } = Dimensions.get("window");
const isMobile = width < 768;
const DetailCountry: React.FC<Props> = ({ route }) => {
  console.log(route, "red");
  return (
    <Container>
      <Header title="Países" />
      <SearchInput detail={true} label="Voltar" />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={true}>
          <RowContainer>
            <ImageContainer
              source={{
                uri: route.params.image,
              }}
            />
            <ContainerInfo>
              <Title>{route.params.name}</Title>
              <RowContainerInfo top={0}>
                <InfoText>
                  <SubtitleText>Nome nativo: </SubtitleText> {route.params.name}
                </InfoText>
                <InfoText>
                  <SubtitleText>TLD: </SubtitleText> {[route.params.tld]}
                </InfoText>
              </RowContainerInfo>
              <RowContainerInfo top={16}>
                <InfoText>
                  <SubtitleText>População: </SubtitleText>{" "}
                  {route.params.population}
                </InfoText>
                <InfoText>
                  <SubtitleText>Moeda: </SubtitleText> Euro
                </InfoText>
              </RowContainerInfo>
              <RowContainerInfo top={16}>
                <InfoText>
                  <SubtitleText>Região: </SubtitleText>
                  {route.params.region}
                </InfoText>
                <InfoText>
                  <SubtitleText>Idiomas: </SubtitleText>German
                </InfoText>
              </RowContainerInfo>
              <RowContainerInfo top={16}>
                <InfoText>
                  <SubtitleText>Sub-região: </SubtitleText> Europa
                </InfoText>
                <InfoText>
                  <SubtitleText>Capital: </SubtitleText>{" "}
                  {route.params.subregion}
                </InfoText>
              </RowContainerInfo>
              <BorderContainer>
                <BorderText>Fronteira:</BorderText>
                {route?.params?.borders?.map((item) => {
                  return (
                    <SafeAreaView key={item}>
                      <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={true}
                      >
                        <BorderText>{item}</BorderText>
                      </ScrollView>
                    </SafeAreaView>
                  );
                })}
              </BorderContainer>
            </ContainerInfo>
          </RowContainer>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};
export default DetailCountry;

const Container = styled.View`
  background-color: #ffffff;
  height: 100%;
`;

const RowContainer = styled.View`
  flex-direction: ${isMobile ? "column" : "row"};
  margin-left: ${isMobile ? "0px" : "75px"};
  margin-top: 60px;
  height: 850px;
`;

const ImageContainer = styled.Image`
  height: ${isMobile ? "200px" : " 400px"};
  width: ${isMobile ? "350px" : " 400px"};
  align-items: ${isMobile ? "center" : null};
  align-self: ${isMobile ? "center" : null}; ;
`;

const ContainerInfo = styled.View`
  margin-left: 48px;
  height: 400px;
  width: 400px;
`;

const Title = styled.Text`
  font-weight: bold;
  margin-bottom: 30px;

  font-size: 36px;
`;

const RowContainerInfo = styled.View`
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: space-between;
  margin-top: ${(props) => props.top || 0}px;
`;

const InfoText = styled.Text`
  font-size: 16px;
  font-weight: normal;
  font-family: "NunitoRegular";
`;

const SubtitleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  font-family: "NunitoRegular";
`;

const BorderContainer = styled.View`
  flex-direction: row;
  margin-top: 70px;
  margin-left: 10px;
  margin-right: 10px;
`;

const BorderText = styled.Text`
  margin-right: 16px;
  border-width: 1px;
  border-color: #0c1013;
  border-radius: 4px;
  ///font-family: 'Nunito_400Regular';
  font-size: 18px;
`;
