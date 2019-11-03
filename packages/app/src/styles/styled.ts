import styled from "styled-components/native";
import { Text as NativeText } from "react-native";

export const Text = styled(NativeText)`
  font-family: "Poppins";
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const FullWidthInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  margin-left: 16px;
`;

export const Toolbar = styled(Row)`
  padding: 15px;
  border-color: #eee;
  border-bottom-width: 1px;
  background: #fff;
`;
