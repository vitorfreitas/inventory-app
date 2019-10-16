import React, { Component } from "react";
import { View } from "react-native";
import Navbar from "../../components/Navbar";
import SearchInput from "../../components/SearchInput";
import InventoryProducts from "../../containers/InventoryProducts";
import { Toolbar } from "@styles/styled";
import { Heading, ContentTitle, Content } from "./styled";
import { products } from "../../mocks/products.json";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

export default class Inventory extends Component {
  render() {
    return (
      <Container>
        <Navbar title="Inventory"></Navbar>
        <Toolbar>
          <SearchInput placeholder={"Search for products"}></SearchInput>
        </Toolbar>

        <Content>
          <Heading>
            <ContentTitle>Produtos</ContentTitle>
          </Heading>

          <InventoryProducts products={products} />
        </Content>
      </Container>
    );
  }
}
