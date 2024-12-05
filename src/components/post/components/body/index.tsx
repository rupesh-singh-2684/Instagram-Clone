import { Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './styles'

const Body = ({ imageUri, onPress }: any) => {

  return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Image source={{ uri: imageUri }}
          style={styles.image} />
      </TouchableWithoutFeedback>
  )
}

export default Body