import React from "react";
import styled from "styled-components/native";
import { Text } from "../../styled";

const Container = styled.View`
  background-color: #fff;
  padding: 16px;
`;

const Title = styled(Text)`
  color: #212121;
  font-size: 18px;
`;

const ProductCard = () => (
  <Container>
    <Title>Hamburger</Title>
  </Container>
);

export default ProductCard;
