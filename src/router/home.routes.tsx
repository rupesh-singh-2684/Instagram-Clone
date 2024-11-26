import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/homescreen';
import StoryScreen from '../screens/storyScreen';

const HomeStack = createNativeStackNavigator();

const HomeRoutes = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ headerShown: false }} 
            />
             {/* <HomeStack.Screen
                name='StoryScreen'
                component={StoryScreen}
                options={{ headerShown: false }} 
            /> */}
        </HomeStack.Navigator>
    )
}

export default HomeRoutes