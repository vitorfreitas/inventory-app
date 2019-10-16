import React from "react";
import { FullWidthInput } from "@styles/styled";
import { Feather } from "@expo/vector-icons";

type Props = {
  placeholder?: string;
};

const SearchInput = ({ placeholder }: Props) => (
  <>
    <Feather name="search" size={25} />
    <FullWidthInput placeholder={placeholder} />
  </>
);

export default SearchInput;
