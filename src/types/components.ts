import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface IHeaderProps {
  title: string;
}

export interface ProductItemProps {
  id: string;
  name: string;
  isFirst: boolean;
  isLast: boolean;
  navigation: any;
}

export interface IButtonProps {
  title: string;
  styleBtn?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  onPress?: () => void;
}
