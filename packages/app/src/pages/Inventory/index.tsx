import React, { Component } from "react";
import { View } from "react-native";
import Navbar from "../../components/Navbar";
import SearchInput from "../../components/SearchInput";
import StockProducts from "../../containers/StockProducts";
import { Toolbar } from "../../styled";

export default class Inventory extends Component {
  render() {
    return (
      <View>
        <Navbar title="Inventory"></Navbar>
        <Toolbar>
          <SearchInput placeholder={"Search for products"}></SearchInput>
        </Toolbar>

        <StockProducts></StockProducts>
      </View>
    );
  }
}
