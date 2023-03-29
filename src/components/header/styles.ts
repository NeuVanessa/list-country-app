import styled from "styled-components/native";

export const Container = styled.View`
  height: 80px;
  justify-content: center;
  /* background-color: #ffffff; */
  border-width: 1;
  border-radius: 2;
  border-color: #ddd;
  border-bottom-width: 2;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.8; 
  shadow-radius: 2;
  elevation: 1;
  margin-left: 0;
  margin-right: 0;
 
`;

export const Title = styled.Text`
  font-size: 36px;
  margin-left: 18;
  margin-top: 40px;
  font-family: "NunitoRegular";
  font-weight: bold;
  color: "#0C1013";
  font-style: normal;
`;
