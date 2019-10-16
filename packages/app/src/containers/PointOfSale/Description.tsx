import React from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import Ripple from "react-native-material-ripple";

import { Row } from "../../styled";
import * as V from "@styles/variables";
import Button from "components/Button";
import NumberPicker from "components/NumberPicker";
import DefaultModal from "components/DefaultModal";

const Picture = styled.Image`
  width: 100%;
  height: 150px;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const EditButton = styled(Ripple).attrs({
  rippleOpacity: 0.1
})`
  width: 50px;
  height: 50px;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  background: ${V.Color.primary};

  top: 120px;
  right: 20px;
  position: absolute;
`;

const Heading = styled(Row)`
  padding: 30px 25px 25px;
`;

const Title = styled.Text`
  color: #333;
  font-size: 18px;
  font-family: "Poppins Bold";
`;

const Price = styled.Text`
  color: #888;
  font-size: 16px;
  font-family: "Poppins";
`;

const CompositionContainer = styled.View`
  padding: 0 25px;
`;

const CompositionRow = styled(Row)`
  margin-bottom: 5px;
`;

const CompositionName = styled.Text`
  font-family: "Poppins Medium";
`;

const CompositionValue = styled.Text`
  font-family: Poppins;
  color: #757575;
`;

const Footer = styled(Row)`
  padding: 0 25px;

  bottom: 20px;
  position: absolute;
`;

const SeeMore = styled.Text`
  font-size: 14px;
  margin-top: 8px;
  color: ${V.Color.primary};
  font-family: "Poppins Medium";
`;

interface Props {
  open: boolean;
  t: (path: string) => string;
  onClose: () => void;
}

const DescriptionModal: React.SFC<Props> = ({ t, open, onClose }) => {
  return (
    <DefaultModal open={open} onClose={onClose}>
      <Picture
        source={{
          uri:
            "https://foodrevolution.org/wp-content/uploads/blog-featured_healthy_foods-20180306.jpg"
        }}
      />

      <EditButton>
        <Feather name="edit-3" color="#fff" size={20} />
      </EditButton>

      <Heading>
        <Title>Hamburguer</Title>
        <Price>R$ 25.00</Price>
      </Heading>

      <CompositionContainer>
        <CompositionRow>
          <CompositionName>Pão de Hamburguer</CompositionName>
          <CompositionValue>1 un</CompositionValue>
        </CompositionRow>

        <CompositionRow>
          <CompositionName>Pão de Hamburguer</CompositionName>
          <CompositionValue>1 un</CompositionValue>
        </CompositionRow>

        <CompositionRow>
          <CompositionName>Pão de Hamburguer</CompositionName>
          <CompositionValue>1 un</CompositionValue>
        </CompositionRow>

        <Row>
          <SeeMore>
            {t("pos.description.see-more")}
            <Feather name="chevron-right" />
          </SeeMore>
        </Row>
      </CompositionContainer>

      <Footer>
        <NumberPicker />
        <Button text={t("pos.description.add")}></Button>
      </Footer>
    </DefaultModal>
  );
};

export default DescriptionModal;
