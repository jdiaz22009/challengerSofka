import React from 'react';
import {FlatList} from 'react-native';
import {ProductItem} from '../components';
import {IProduct} from '@/types/app';

export const ProductList = ({
  data,
  navigation,
}: {
  data: IProduct[];
  navigation: any;
}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => (
        <ProductItem
          navigation={navigation}
          name={item?.name ?? ''}
          id={item?.id ? item?.id : ''}
          isFirst={index === 0}
          isLast={index === data.length - 1}
        />
      )}
      keyExtractor={item => (item?.id ? item.id.toString() : '')}
    />
  );
};
