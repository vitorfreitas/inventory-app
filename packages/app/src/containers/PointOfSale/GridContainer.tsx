import React from 'react';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { SectionGrid } from 'react-native-super-grid';

import Product from 'shared/interfaces/product';
import GridItem from './GridItem';
import { ItemContainer } from './styled';

const AddProductItem = styled(ItemContainer)`
  align-items: center;
  justify-content: center;
  border: 1px #bdbdbd dashed;
`;

interface Props {
  t: (path: string) => string;
  products: Product[];
  onCreateProduct: () => void;
  onProductLongPress: (product: Product) => void;
  onChangeVisualizationMode: (vMode: 'grid' | 'list') => void;
}

const GridContainer: React.SFC<Props> = ({
  t,
  products,
  onCreateProduct,
  onProductLongPress,
}) => {
  const addProductItem = () => (
    <AddProductItem onPress={onCreateProduct}>
      <Feather name="plus" size={40} color="#bdbdbd" />
    </AddProductItem>
  );

  const _renderItem = ({ item, index }) => {
    if (index === 0) return addProductItem();

    return <GridItem data={item} onLongPress={onProductLongPress} />;
  };

  return (
    <SectionGrid
      itemDimension={100}
      spacing={5}
      sections={[{ title: 'Products', data: [{}, ...products] }]}
      renderItem={_renderItem}
    />
  );
};

export default GridContainer;
