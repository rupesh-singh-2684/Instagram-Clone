import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Icons } from '../../assets'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import styles from './styles';

const NewPost = () => {
  const [imageUri, setImageUri] = useState('')

  const openGallery = () => {
    console.log("gallery");
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response: any) => {
      if (response.assets && response.assets[0]) {
        setImageUri(response.assets[0].uri);
        // console.log(imageUri, "imageuri")
      }
    });
  };
  const handleTakePhoto = () => {
    console.log('launch camera');
    launchCamera({ mediaType: 'photo', quality: 1 }, (response: any) => {
      if (response.assets && response.assets[0]) {
        setImageUri(response.assets[0].uri);
        // console.log(imageUri, "image uri")
      }
    });
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.postImgContainer}>
          <Image source={{uri:imageUri}} style={styles.postImg}/>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleTakePhoto}>
            <Image source={Icons.camera} style={styles.iconImg}/>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity onPress={openGallery}>
            <Image source={Icons.images} style={styles.iconImg}/>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default NewPost

