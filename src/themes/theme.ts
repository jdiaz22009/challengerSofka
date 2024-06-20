import {Theme} from '@react-navigation/native';
import {BLACK, RED, WHITE} from './colors';

export const LightTheme: Theme = {
  dark: false,
  colors: {
    primary: BLACK,
    background: WHITE,
    text: BLACK,
    border: WHITE,
    notification: RED,
    card: WHITE,
  },
};
