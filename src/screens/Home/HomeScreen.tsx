import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';

import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '@/routes/params.stack';
import {
  Button,
  Header,
  Input,
  ProductList,
  Skeleton,
} from '@/components/components';
import {geProducts} from '@/services/product';
import {IProduct} from '@/types/app';
import {useData} from '@/context/DataContext';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> {}

export const HomeScreen = ({navigation}: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const {data} = useData();

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredProducts(data);
    } else {
      const lowercasedFilter = searchTerm.toLowerCase();
      const filteredData = data.filter(
        product =>
          product.name.toLowerCase().includes(lowercasedFilter) ||
          product.id.toLowerCase().includes(lowercasedFilter),
      );
      setFilteredProducts(filteredData);
    }
  }, [searchTerm, data]);

  const handlerNavigation = () => {
    navigation.push('AddProductScreen', {type: 'register'});
  };

  return (
    <View style={styles.container}>
      <View style={styles.space} />
      <Header title="Banco" />

      <View style={styles.space} />
      <View style={styles.contentList}>
        <Input
          styleInput={styles.input}
          placeholder="Search..."
          onChangeText={setSearchTerm}
          valueText={searchTerm}
        />

        <View style={styles.space2} />

        {data.length === 0 ? (
          <Skeleton />
        ) : (
          <ProductList data={filteredProducts} navigation={navigation} />
        )}
      </View>

      <View style={styles.space3} />

      <View style={styles.btnContainer}>
        <Button
          title="Agregar"
          onPress={handlerNavigation}
          styleBtn={styles.btnAdd}
          styleText={styles.btnText}
        />
      </View>
    </View>
  );
};
