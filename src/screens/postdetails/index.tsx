import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './styles';


const PostDetailsScreen = ({ route }:any) => {
    const { post } = route.params;
  
    return (
      <SafeAreaView style={styles.detailsContainer}>
        <View style={styles.userInfo}>
          <Image source={{ uri: post.user.imageUri }} style={styles.userImage} />
          <Text style={styles.userName}>{post.user.name}</Text>
        </View>
        <Image source={{ uri: post.imageUri }} style={styles.postImage} />
        <View style={styles.postDetails}>
          <Text style={styles.likes}>{post.likeCounts} Likes</Text>
          <Text style={styles.caption}>{post.captions}</Text>
          <Text style={styles.time}>{post.postedAt}</Text>
        </View>
      </SafeAreaView>
    );
  };
  
  
  export {PostDetailsScreen};