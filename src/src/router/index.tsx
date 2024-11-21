import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Bottomtab from './bottomtabnavigation';
import HomeRoutes from './home.routes';
import SplashScreen from '../screens/splashScreen';


const RootStack = createNativeStackNavigator();

const Router = () => {
  return (
    <RootStack.Navigator>

      <RootStack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      /> 
      <RootStack.Screen
        name="Bottom"
        component={Bottomtab}
        options={{ headerShown: false }}
      />
      {/* <RootStack.Screen
        name='Home'
        component={HomeRoutes}
        options={{ headerShown: false }} 
      /> */}
    </RootStack.Navigator>
  )
}

export default Router