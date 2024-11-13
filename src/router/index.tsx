import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Bottomtab from './bottomtabnavigation';
import StoryScreen from '../screens/storyScreen';


const RootStack = createNativeStackNavigator();

const Router = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Bottom"
        component={Bottomtab}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name='StoryScreen'
        component={StoryScreen}
        options={{ headerShown: false }} />
    </RootStack.Navigator>
  )
}

export default Router