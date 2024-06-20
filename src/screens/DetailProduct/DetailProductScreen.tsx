import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

import {BottomSheet, Button, Header} from '@/components/components';
import {geProductById} from '@/services/product';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '@/routes/params.stack';
import {IProduct} from '@/types/app';

interface Props
  extends StackScreenProps<RootStackParams, 'DetailProductScreen'> {}
export const DetailProductScreen = ({navigation, route}: Props) => {
  const [product, setProduct] = useState<IProduct | null>(null);

  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  useEffect(() => {
    handlerGetProduct();
  }, []);

  const handlerGetProduct = async () => {
    try {
      const response = await geProductById(route.params.id);
      setProduct(response);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.space} />

      <Header title="Banco" />
      <View style={styles.space} />

      <View style={styles.containerSumary}>
        <Text style={styles.textId}>ID: {product?.id}</Text>
        <Text style={styles.textInformation}>Informacion extra</Text>

        <View style={styles.space} />

        <View style={styles.rowData}>
          <Text>Nombre </Text>
          <Text style={styles.bold}>{product?.name}</Text>
        </View>

        <View style={styles.spaceaData} />

        <View style={styles.rowData}>
          <Text>Descripcion </Text>
          <Text style={styles.bold}>{product?.description}</Text>
        </View>

        <View style={styles.spaceaData} />

        <View style={styles.columnData}>
          <Text>Logo </Text>

          <View style={styles.imageContainer}>
            <Image
              style={styles.imgLogo}
              source={{
                uri: product?.logo
                  ? product.logo
                  : 'https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk=',
              }}
            />
          </View>
        </View>

        <View style={styles.spaceaData} />

        <View style={styles.rowData}>
          <Text>Fecha liberacion </Text>
          <Text style={styles.bold}>{product?.date_release}</Text>
        </View>

        <View style={styles.spaceaData} />

        <View style={styles.rowData}>
          <Text>Fecha revision </Text>
          <Text style={styles.bold}>{product?.date_revision}</Text>
        </View>
      </View>

      <View style={styles.space} />

      <View style={styles.contentBtn}>
        <Button
          title="Editar"
          styleBtn={styles.btnEdit}
          styleText={styles.btnTextEdit}
          onPress={() =>
            navigation.push('AddProductScreen', {
              product: product ?? null,
              type: 'update',
            })
          }
        />
        <View style={styles.spaceabtn} />
        <Button
          title="Eliminar"
          onPress={toggleBottomSheet}
          styleBtn={[styles.btnEdit, styles.btnDelete]}
          styleText={[styles.btnTextEdit, styles.btnTextDelete]}
        />
      </View>

      {isBottomSheetVisible && (
        <BottomSheet
          product={{id: product?.id ?? '', title: product?.name ?? ''}}
          isVisible={isBottomSheetVisible}
          onClose={toggleBottomSheet}
          navigation={navigation}
        />
      )}
    </View>
  );
};
