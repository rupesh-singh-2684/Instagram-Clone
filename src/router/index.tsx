import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Bottomtab from './bottomtabnavigation';
import StoryScreen from '../screens/storyScreen';
import Login from '../screens/login';
import AuthRoutes from './authentication.route';
import MessagesScreen from '../screens/chat';
import ChatScreen from '../screens/chatScreen';

const RootStack = createNativeStackNavigator();
const Router = () => {
  return (
    <RootStack.Navigator initialRouteName='Auth'>
      <RootStack.Screen
        name='Auth'
        component={AuthRoutes}
        options={{ headerShown: false }}
      />  
      <RootStack.Screen
        name="Bottom"
        component={Bottomtab}
        options={{ headerShown: false ,animation:'fade_from_bottom'}}
      />
      <RootStack.Screen
        name='StoryScreen'
        component={StoryScreen}
        options={{ headerShown: false ,animation:'fade'}} 
      />
      <RootStack.Screen
        name='Chat'
        component={MessagesScreen}
        options={{ headerShown: false ,}} 
      />
      <RootStack.Screen
        name='ChatScreen'
        component={ChatScreen}
        options={{ headerShown: false ,}} 
      />
    </RootStack.Navigator>
  )
}
export default Router