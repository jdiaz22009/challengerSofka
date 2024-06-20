import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export type RootStackParams = {
  HomeScreen: undefined;
  AddProductScreen: undefined;
  DetailProductScreen: {
    id: string;
  };
};

export type AppNavigationParams = RootStackParams;

export interface PageConfig {
  name: keyof AppNavigationParams;
  component: (args?: any) => JSX.Element;
  options: NativeStackNavigationOptions;
}

export type ScreensConfig = {
  [key in keyof AppNavigationParams]: PageConfig;
};

export type ScreenName = keyof AppNavigationParams;
