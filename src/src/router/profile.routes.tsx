import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EditProfile from '../screens/editProfile';
import Profile from '../screens/profile';

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