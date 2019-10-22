import React from 'react';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity`
  border-radius: 3px;
  border: 2px solid #000;
`;

const Quantity = styled.Text`
  margin: 0 10px;
  font-size: 14px;
  margin-top: 3px;
  font-family: "Poppins Medium";
`;

interface Props {
  quantity: number
  onChange: (value: number) => void
}

const NumberPicker: React.SFC<Props> = ({ quantity, onChange }) => (
  <Container>
    <Button onPress={() => onChange(quantity - 1)}>
      <Feather size={20} name="minus" />
    </Button>

    <Quantity>{quantity}</Quantity>

    <Button onPress={() => onChange(quantity + 1)}>
      <Feather size={20} name="plus" />
    </Button>
  </Container>
);

export default NumberPicker;
