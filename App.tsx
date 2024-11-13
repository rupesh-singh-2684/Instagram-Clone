import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Bottomtab from './src/router/bottomtabnavigation';
import Router from './src/router';

const App = () => {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  )
}

export default App