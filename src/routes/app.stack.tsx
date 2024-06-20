import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParams} from './params.stack';
import {screens} from './routes';

const Stack = createNativeStackNavigator<RootStackParams>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={screens.HomeScreen.name}
      screenOptions={{
        headerShadowVisible: false,
        orientation: 'portrait',
      }}>
      <Stack.Screen
        name={screens.HomeScreen.name}
        component={screens.HomeScreen.component}
        options={screens.HomeScreen.options}
      />
      <Stack.Screen
        name={screens.AddProductScreen.name}
        component={screens.AddProductScreen.component}
        options={screens.AddProductScreen.options}
      />
      <Stack.Screen
        name={screens.DetailProductScreen.name}
        component={screens.DetailProductScreen.component}
        options={screens.DetailProductScreen.options}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
