import React from 'react';
import {Text, View} from 'react-native';

import {IconCashLine} from '@/components/components';
import {BLUE_DARK} from '@/themes';
import {IHeaderProps} from '@/types/components';
import styles from './styles';

export const Header = ({title}: IHeaderProps) => {
  return (
    <View style={styles.container}>
      <IconCashLine width={30} height={30} color={BLUE_DARK} />
      <View style={styles.spaceWidth} />
      <Text style={styles.textHeader}>{title}</Text>
    </View>
  );
};
