import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const ProfilePicture = ({uri, size = 70}:any) => {
  return (
    <View style={[styles.contanier, {width:size+6, height:size+6}]}>
   <Image source={{uri}}
   style={[styles.profileImg, {width:size, height:size}] }
   /> 
   </View>
  )
}

export default ProfilePicture