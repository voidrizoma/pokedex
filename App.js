/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import Home from './src/Views/Home/Home';

const App = () => {
  return (
    <NavigationContainer>
       <Home />
    </NavigationContainer>
     
  )
};

export default App;
