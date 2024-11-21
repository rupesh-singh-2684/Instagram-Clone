import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/homescreen';
import StoryScreen from '../screens/storyScreen';
import Profile from '../screens/profile';
import EditProfile from '../screens/editProfile';

const ProfileStack = createNativeStackNavigator();

const ProfileRoutes = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name='Profile'
                component={Profile}
                options={{ headerShown: false }} />
            <ProfileStack.Screen
                name='EditProfile'
                component={EditProfile}
                options={{ headerShown: false }} />
        </ProfileStack.Navigator>
    )
}

export default ProfileRoutes