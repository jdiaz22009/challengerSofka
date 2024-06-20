import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import {Header} from '@/components/components';
import {geProducts} from '@/services/product';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '@/routes/params.stack';

const {height, width} = Dimensions.get('window');

interface Props
  extends StackScreenProps<RootStackParams, 'DetailProductScreen'> {}
export const DetailProductScreen = ({route}: Props) => {
  useEffect(() => {
    handlerGetProduct();
  }, []);

  const handlerGetProduct = async () => {
    try {
      const response = await geProducts();
      response.filter(item => item.id === route.params.id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.space} />

      <Header title="Banco" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  space: {
    height: height * 0.07,
  },
});
