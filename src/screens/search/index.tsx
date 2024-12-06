import React from 'react';
import {Image,FlatList,TouchableOpacity,SafeAreaView,ScrollView,} from 'react-native';
import post from '../../assets/data/post';
import styles from './styles';
import InputBox from '../../components/InputBox';

const SearchScreen = ({navigation}: any) => {
  const renderGridItem = ({item}: any) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => navigation.navigate('PostDetailScreen', {post: item})}>
      <Image source={{uri: item.imageUri}} style={styles.image} />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <InputBox
          placeholder={'Ask Meta AI or Search'}
          style={styles.inputText}
        />
        <FlatList
          data={post}
          renderItem={renderGridItem}
          keyExtractor={item => item.id}
          numColumns={3}
          contentContainerStyle={styles.grid}
          bounces={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export {SearchScreen};
