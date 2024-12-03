import { View } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import Feed from '../../components/feed'
import styles from './styles'

const HomeScreen = () => {
  // console.log('====>>>>',route)
  return (
    <View style={styles.container}>
      <Header />
      <Feed />
    </View>
  )
}

export default HomeScreen