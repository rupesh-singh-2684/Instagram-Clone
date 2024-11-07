import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'
import { Icons } from '../../assets'

const Login = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <Image source={Icons.homeLogo}
            style={styles.img} />
        </View>
        {/* <View> */}
        <TextInput
          placeholder='Phone number, username or email address'
          style={styles.idInput} />
        <TextInput
          placeholder='Password'
          style={styles.idInput} />
        {/* </View> */}
    

      <View style={styles.forget}>
        <Text style={{ color: '#0c9cf5' }}> Forget password?</Text>
      </View>
      </View>

    </>


  )
}

export default Login