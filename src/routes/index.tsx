import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './app.stack';
import {LightTheme} from '@/themes';
import {DataProvider} from '@/context/DataContext';

const Navigator = () => {
  return (
    <NavigationContainer theme={LightTheme}>
      <DataProvider>
        <AppStack />
      </DataProvider>
    </NavigationContainer>
  );
};

export default Navigator;
