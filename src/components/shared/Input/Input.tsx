import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import styles from './styles';

interface InputProps {
  styleInput?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  isError?: boolean;
  isFocus?: boolean;
  editable?: boolean;
  valueText?: any;
  colorPlaceHolder?: string;
  onChangeText?(value: string): void;
}

export const Input: React.FC<InputProps> = ({
  styleInput,
  placeholder,
  onChangeText,
  keyboardType,
  isError,
  isFocus = true,
  editable,
  colorPlaceHolder,
  textStyle,
  valueText = '',
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  return (
    <View
      style={[
        styles.container,
        styleInput,
        isError ? styles.error : null,
        isFocused ? styles.borderFocus : null,
        editable ? styles.inputNotEdit : null,
      ]}>
      <TextInput
        style={[styles.input, isFocused ? styles.inputFocus : null, textStyle]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onFocus={isFocus ? onFocus : () => {}}
        onBlur={isFocus ? onBlur : () => {}}
        autoCapitalize={'none'}
        placeholderTextColor={colorPlaceHolder}
        editable={editable ? false : true}
        value={valueText}
        keyboardType={keyboardType ? keyboardType : 'default'}
      />
    </View>
  );
};
