import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {IButtonProps} from '@/types/components';

export const Button = ({title, onPress, styleBtn, styleText}: IButtonProps) => {
  const handlePress = () => {
    onPress && onPress();
  };

  return (
    <TouchableOpacity style={styleBtn} onPress={handlePress}>
      <Text style={styleText}>{title}</Text>
    </TouchableOpacity>
  );
};
