import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/homescreen';
import NotificationsScreen from '../screens/notification';

const HomeStack = createNativeStackNavigator();

const HomeRoutes = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ headerShown: false }} 
            />
            <HomeStack.Screen
               name='NotificationScreen'
               component={NotificationsScreen}
               options={{ headerShown: false }} 
           />
            {/* <HomeStack.Screen
                name='Chat'
                component={MessagesScreen}
                options={{ headerShown: false }} 
            /> */}
            {/* <HomeStack.Screen
                name='ChatScreen'
                component={ChatScreen}
                options={{ headerShown: false }} 
            /> */}
        </HomeStack.Navigator>
    )
}

export default HomeRoutes