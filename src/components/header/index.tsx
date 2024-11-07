import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icons } from '../../assets'
import styles from './styles'

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity>
        <View>
          <Image source={Icons.homeLogo}
            style={styles.titleImg} />
        </View>
      </TouchableOpacity>

      <View style={styles.iconsDiv}>
        <TouchableOpacity>
          <Image source={Icons.homeNotification}
            style={styles.headerIcons} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Icons.homeMessenger}
            style={styles.headerIcons} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Header