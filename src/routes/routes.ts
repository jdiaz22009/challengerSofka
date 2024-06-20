import {
  AddProductScreen,
  DetailProductScreen,
  HomeScreen,
} from '@/screens/screens';
import {ScreensConfig} from './params.stack';

export const screens: ScreensConfig = {
  HomeScreen: {
    name: 'HomeScreen',
    component: HomeScreen,
    options: {
      headerShown: false,
    },
  },
  AddProductScreen: {
    name: 'AddProductScreen',
    component: AddProductScreen,
    options: {
      headerShown: false,
    },
  },
  DetailProductScreen: {
    name: 'DetailProductScreen',
    component: DetailProductScreen,
    options: {
      headerShown: false,
    },
  },
};
