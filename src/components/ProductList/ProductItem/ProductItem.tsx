import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

import {IconArrow} from '../../components';

import {ProductItemProps} from '@/types/components';
import {GRAY_100} from '@/themes';

export const ProductItem = ({
  id,
  name,
  isFirst,
  isLast,
  navigation,
}: ProductItemProps) => (
  <TouchableOpacity
    onPress={() =>
      navigation.push('DetailProductScreen', {
        id: id,
      })
    }
    style={[
      styles.item,
      isFirst && styles.firstItem,
      isLast && styles.lastItem,
    ]}>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.id}>ID: {id}</Text>
    </View>

    <IconArrow width={24} height={24} color={GRAY_100} />
  </TouchableOpacity>
);
