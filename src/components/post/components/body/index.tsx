import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './styles'
import Video from 'react-native-video'

const Body = ({ imageUri, videoUri,onPress }: any) => {

  // const onPress = () => {
  //   console.log('img pressed');
  // }

  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        {/* <Video source={{ uri: videoUri }}
      style={styles.image}
      /> */}
        <Image source={{ uri: imageUri }}
          style={styles.image} />
      </TouchableWithoutFeedback>

      {/* <TouchableWithoutFeedback onPress={onPress}>
        <Video source={{ uri: videoUri }}
          style={styles.image}
        />
      </TouchableWithoutFeedback> */}
    </>
  )
}

export default Body