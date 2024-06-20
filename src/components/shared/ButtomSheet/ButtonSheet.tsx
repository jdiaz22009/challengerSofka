import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import styles from './styles';

import {IBottomSheetProps} from '@/types/components';
import {Button} from '@/components/components';
import {deleteProductById} from '@/services/product';

export const BottomSheet = ({
  isVisible,
  onClose,
  product,
  navigation,
}: IBottomSheetProps) => {
  const handlerDeleteProduct = async () => {
    try {
      await deleteProductById(product.id);
      onClose();
      navigation.pop();
    } catch (error) {
      throw error;
    }
  };

  return (
    <Modal
      visible={isVisible}
      animationType="none"
      transparent
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.bottomSheet}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.separator} />
          <View style={styles.sheetContent}>
            <Text style={styles.sheetTitle}>
              ¿ Estas seguro de eliminar el prodcutos {product.title} ?
            </Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.contentBtn}>
            <Button
              title="Confirmar"
              onPress={handlerDeleteProduct}
              styleBtn={styles.btnSend}
              styleText={styles.btnTextSend}
            />
            <View style={styles.space3} />
            <Button
              title="Cancelar"
              onPress={onClose}
              styleBtn={[styles.btnSend, styles.btnReset]}
              styleText={styles.btnTextSend}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
