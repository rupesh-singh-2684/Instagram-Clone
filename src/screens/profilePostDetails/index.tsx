import React from 'react';
import {View,Text,Image,SafeAreaView} from 'react-native';
import styles from './styles';

const ProfilePostDetailsScreen = ({ route }: any) => {
  const { post } = route.params;
  const { name, imageUri } = route.params as { name: any, imageUri: any, }

  return (
    <SafeAreaView style={styles.detailsContainer}>
      <View style={styles.userInfo}>
        <Image source={{ uri: imageUri }} style={styles.userImage} />
        <Text style={styles.userName}>{name || 'Rupesh Singh'}</Text>
      </View>
      <Image source={{ uri: post.imageUri }} style={styles.postImage} />
      <View style={styles.postDetails}>
        <Text style={styles.likes}>{post.likeCounts || 0} Likes</Text>
        <Text style={styles.caption}>{post.captions || '#instagram #posts'}</Text>
        <Text style={styles.time}>{post.postedAt || '10sec'}</Text>
      </View>
    </SafeAreaView>
  );
};


export { ProfilePostDetailsScreen };