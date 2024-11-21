import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icons } from '../assets';
import HomeScreen from '../screens/homescreen';
import Search from '../screens/search';
import NewPost from '../screens/post';
import Reels from '../screens/reels';
import Profile from '../screens/profile';
import HomeRoutes from './home.routes';
import ProfileRoutes from './profile.routes';


const Tab = createBottomTabNavigator()
const Bottomtab = () => {

    return (

        <Tab.Navigator
            screenOptions={({ route }): any => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconname;

                    if (route.name === 'Home') {
                        if (focused) {
                            iconname = Icons.pressedHome
                        }
                        else {
                            iconname = Icons.home

                        }
                    }
                    if (route.name === 'Search') {
                        if (focused) {
                            iconname = Icons.pressedSearch
                        }
                        else {
                            iconname = Icons.search
                        }
                    }
                    if (route.name === 'NewPost') {
                        if (focused) {
                            iconname = Icons.pressedPost
                        }
                        else {
                            iconname = Icons.post
                        }
                    }
                    if (route.name === 'Reels') {
                        if (focused) {
                            iconname = Icons.pressedReel
                        }
                        else {
                            iconname = Icons.reel
                        }
                    }
                    if (route.name === 'Profile') {
                        if (focused) {
                            iconname = Icons.pressedProfile
                        }
                        else {
                            iconname = Icons.profile
                        }
                    }
                    return <Image
                        source={iconname}
                        style={[{ width: 30, height: 30 }]
                        } />
                },
                tabBarLabel: () => { false },
                tabBarIconStyle: { marginTop: Dimensions.get('window').height * .01 },
            })}>

            <Tab.Screen
                name="Home"
                component={HomeRoutes}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="Search"
                component={Search}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="NewPost"
                component={NewPost}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="Reels"
                component={Reels}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileRoutes}
                options={{ headerShown: false }}
            />

        </Tab.Navigator>

    )
}

export default Bottomtab