import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const Body = ({imageUri}:any) => {
  return (
    <Image source={{uri:imageUri}} 
    style={styles.image}/>
  )
}

export default Body