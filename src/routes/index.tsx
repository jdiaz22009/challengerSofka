import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './app.stack';
import {LightTheme} from '@/themes';

const Navigator = () => {
  return (
    <NavigationContainer theme={LightTheme}>
      <AppStack />
    </NavigationContainer>
  );
};

export default Navigator;
