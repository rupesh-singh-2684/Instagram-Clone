import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icons } from '../../assets'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const NewPost = () => {
  const [imageUri, setImageUri] = useState('')

  const openGallery = () => {
    console.log("gallery");
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response: any) => {
      // console.log(response,'dsadadasda');
      if (response.assets && response.assets[0]) {
        // console.log(imageUri, "imageuri")
        setImageUri(response.assets[0].uri);
      }
    });
  };
  const handleTakePhoto = () => {
    console.log('launch camerafghjkjhgfgjikjhghj');
    launchCamera({ mediaType: 'photo', quality: 1 }, (response: any) => {
      console.log('launch camera');

      if (response.assets && response.assets[0]) {
        setImageUri(response.assets[0].uri);
        // console.log(imageUri, "image uri")
      }
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View style={{flex:1}}>
            <Image source={{uri:imageUri}} style={{resizeMode:'cover',width:'auto',height:'100%'}}/>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'grey', padding: 15 ,flex:0.05}}>
          <TouchableOpacity onPress={handleTakePhoto}>
            <Image source={Icons.home} style={{ height: 30, width: 30, borderWidth: 1, borderRadius: 8 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openGallery}>
            <Image source={Icons.home} style={{ height: 30, width: 30, borderWidth: 1, borderRadius: 8 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Icons.home} style={{ height: 30, width: 30, borderWidth: 1, borderRadius: 8 }} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NewPost