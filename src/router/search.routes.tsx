import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SearchScreen } from '../screens/search';
import { PostDetailsScreen } from '../screens/postdetails';

const SearchStack = createNativeStackNavigator();

const SearchRoutes = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen
                name='SearchScreen'
                component={SearchScreen}
                options={{ headerShown: false }} 
            />
             <SearchStack.Screen
                name='PostDetailScreen'
                component={PostDetailsScreen}
                options={{ headerShown: false }} 
            />
            {/* <SearchStack.Screen
                name='ChatScreen'
                component={MessagesScreen}
                options={{ headerShown: false }} 
            /> */}
        </SearchStack.Navigator>
    )
}

export default SearchRoutes