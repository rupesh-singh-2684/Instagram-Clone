import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ProfilePicture from '../../../profilePicture'
import styles from './styles'
import { Icons } from '../../../../assets'

const Header = ({ imageUri, name }:any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileContainer}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text style={styles.userName}>{name}</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={Icons.threeDots}
          style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}

export default Header