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


const ProfilePostDetailsScreen = ({ route }: any) => {
  const { image } = route.params;
  // console.log(route);
  const { name, imageUri } = route.params as { name: any, imageUri: any, }
  // console.log(image,"g>>>>>>>>>>>daj................/");

  return (
    <SafeAreaView style={styles.detailsContainer}>
      <View style={styles.userInfo}>
        <Image source={{ uri: imageUri }} style={styles.userImage} />
        <Text style={styles.userName}>{name || 'Rupesh Singh'}</Text>
      </View>
      <Image source={{ uri: image.imageUri }} style={styles.postImage} />
      <View style={styles.postDetails}>
        <Text style={styles.likes}>{image.likeCounts} Likes</Text>
        <Text style={styles.caption}>{image.captions}</Text>
        <Text style={styles.time}>{image.postedAt}</Text>
        <View style={styles.userInfo}>
          <Image source={{ uri: image.comments.user.icon }} style={styles.commentUserImg} />
          <Text style={styles.userName}>{image.comments.user.name}</Text>
          <Text style={styles.comments}>{image.comments.user.comments}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};


export { ProfilePostDetailsScreen };