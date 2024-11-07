import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import ProfilePicture from '../../components/profilePicture'
import Stories from '../../components/stories'
import Post from '../../components/post'
import Feed from '../../components/feed'
import styles from './styles'






const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Header/>
        {/* <Stories/> */}
        <Feed/>
   </View>
  )
}

export default HomeScreen