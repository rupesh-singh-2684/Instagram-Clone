import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default HomeScreen