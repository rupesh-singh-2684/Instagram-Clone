import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Icons } from '../../assets'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewPost = () => {
  const navigation:any = useNavigation();
  const [imageUri, setImageUri] = useState('')

  const openGallery = () => {
    // console.log("gallery");
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, async (response: any) => {
      if (response.assets && response.assets[0]) {
        const uri = response.assets[0].uri;
        setImageUri(uri);
        await saveImageUri(uri); 
      }
    });
  };
  const handleTakePhoto = () => {
    // console.log('launch camera');
    launchCamera({ mediaType: 'photo', quality: 1 }, async (response: any) => {
      if (response.assets && response.assets[0]) {
        const uri = response.assets[0].uri;
        setImageUri(uri);
        await saveImageUri(uri);
      }
    });
  }
  const saveImageUri = async (uri: string) => {
    try {
      await AsyncStorage.setItem('@new_post_image', uri);
    } catch (error) {
      console.error('Failed to save image URI:', error);
    }
  };

  const handlePost = () => {
    // console.log(imageUri ,">>>>>>>>>>.");
    if (imageUri) {
      navigation.navigate('Profile',{screen:'ProfileScreen',params:{newPostImage:imageUri}});
      setImageUri('');
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.postImgContainer}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.postImg} />
          ) : (
            <Text style={styles.placeholderText}>No image selected</Text>
          )}
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
        {imageUri ? (
          <TouchableOpacity onPress={()=>handlePost()} style={styles.postButton}>
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  )
}
export default NewPost

