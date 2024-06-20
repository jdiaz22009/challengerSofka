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

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> {}

export const HomeScreen = ({navigation}: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [skeleton, setSkeleton] = useState<boolean>(false);

  useEffect(() => {
    handlerGetProduct();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredProducts(products);
    } else {
      const lowercasedFilter = searchTerm.toLowerCase();
      const filteredData = products.filter(
        product =>
          product.name.toLowerCase().includes(lowercasedFilter) ||
          product.id.toLowerCase().includes(lowercasedFilter),
      );
      setFilteredProducts(filteredData);
    }
  }, [searchTerm, products]);

  const handlerNavigation = () => {
    navigation.push('AddProductScreen');
  };

  const handlerGetProduct = async () => {
    try {
      setSkeleton(true);
      const response = await geProducts();
      setProducts(response);
      setSkeleton(false);
    } catch (error) {
      setSkeleton(false);
    }
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

        {skeleton ? (
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
