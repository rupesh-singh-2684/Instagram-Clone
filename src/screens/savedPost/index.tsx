import React from 'react';
import {Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const SavedScreen = () => {
  const navigation: any = useNavigation();
  const savedPostIds = useSelector(state => state.savedPost.savedPostIds);
  const renderItem = ({item}: any) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() =>
        navigation.navigate('PostDetailScreen', {savedPostIds: item})
      }>
      <Image source={{uri: item.imageUri}} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Saved Posts</Text>
      <FlatList
        data={savedPostIds}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.grid}
        numColumns={3}
        bounces={false}
      />
    </SafeAreaView>
  );
};

export default SavedScreen;
