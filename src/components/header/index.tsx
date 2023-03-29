import React from "react";
import { Dimensions } from "react-native";

import { Container, Title } from "./styles";

interface Props {
  title: string;
}

const { width } = Dimensions.get("window");

const isMobile = width < 768;

const Header: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <Title
        style={{
          marginLeft: isMobile ? 18 : 80,
          marginTop: isMobile ? 15 : 0,
        }}
      >
        {title}
      </Title>
    </Container>
  );
};
export default Header;
