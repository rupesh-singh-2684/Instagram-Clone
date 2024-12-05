import { View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icons } from '../../assets'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const Header = () => {

  const navigation:any = useNavigation();
  const handleNav =() =>{
    navigation.navigate('NotificationScreen')
  }
  const handleNavChat =() =>{
    navigation.navigate('Chat')
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <View>
          <Image source={Icons.homeLogo}
            style={styles.titleImg} />
        </View>
      </TouchableOpacity>
      <View style={styles.iconsDiv}>
        <TouchableOpacity onPress={handleNav}>
          <Image source={Icons.homeNotification}
            style={styles.headerIcons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavChat}>
          <Image source={Icons.homeMessenger}
            style={styles.messangerIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default Header