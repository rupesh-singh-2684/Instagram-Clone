import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/homescreen';
import StoryScreen from '../screens/storyScreen';
import Login from '../screens/login';
import Signup from '../screens/signUp';
import SplashScreen from '../screens/splash';

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name='SplashScreen'
                component={SplashScreen}
                options={{ headerShown: false }} 
            />
            <AuthStack.Screen
                name='loginScreen'
                component={Login}
                options={{ headerShown: false }} 
            />
            <AuthStack.Screen
                name='SignUpScreen'
                component={Signup}
                options={{ headerShown: false }} 
            />
            
        </AuthStack.Navigator>
    )
}

export default AuthRoutes