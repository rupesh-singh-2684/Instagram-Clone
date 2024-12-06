import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/profile';
import EditProfile from '../screens/editProfile';
import SectionMenu from '../screens/profile/component/sectionlist';
import { ProfilePostDetailsScreen } from '../screens/profilePostDetails';
import SavedPost from '../screens/savedPost';

const ProfileStack = createNativeStackNavigator();

const ProfileRoutes = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name='ProfileScreen'
                component={Profile}
                options={{ headerShown: false }} 
            />
            <ProfileStack.Screen
                name='EditProfile'
                component={EditProfile}
                options={{ headerShown: false }} />
            <ProfileStack.Screen
                name='SectionList'
                component={SectionMenu}
                options={{ headerShown: false ,animation:'fade_from_bottom'}} />   
            <ProfileStack.Screen
                name='ProfilePostDetailScreen'
                component={ProfilePostDetailsScreen}
                options={{ headerShown: false }} />
            <ProfileStack.Screen
                name='SavedPostScreen'
                component={SavedPost}
                options={{ headerShown: false }} />           
        </ProfileStack.Navigator>
    )
}

export default ProfileRoutes