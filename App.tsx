import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Bottomtab from './src/router/bottomtabnavigation';
import Router from './src/router';
// import { ReanimatedRoot } from 'react-native-reanimated';

const App = () => {
  return (
    // <ReanimatedRoot>
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
    // </ReanimatedRoot>
  )
}

export default App