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
import post from '../../assets/data/post';
import styles from './styles';

const SearchScreen = ({ navigation }:any) => {
  const renderGridItem = ({ item }:any) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => navigation.navigate('PostDetailScreen', { post: item })}>
      <Image source={{ uri: item.imageUri }} style={styles.image} />
    </TouchableOpacity>
  );
  
  return (
    <SafeAreaView>    
      <FlatList
      data={post}
      renderItem={renderGridItem}
      keyExtractor={(item) => item.id}
      numColumns={3}
      contentContainerStyle={styles.grid}
    />
    </SafeAreaView>
  );
};



export { SearchScreen};