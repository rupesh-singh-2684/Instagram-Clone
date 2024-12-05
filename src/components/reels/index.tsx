import React, {useCallback, useState} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import SingleReel from '../reel';
import post from '../../assets/data/post';
import { RefreshControl } from 'react-native';
import post1 from '../../assets/data/post1';

const ReelsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [posts, setPosts]:any = useState(post);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [data, setData] = useState(post);
 
  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    
    setTimeout(() => {
      setIsRefreshing(false);
      setData((prevData) => (prevData === post ? post1 : post));
    }, 1500);
  }, []);

  const handleChangeIndexValue = ({index}:any) => {
    setCurrentIndex(index);
  };
  
  const handleLikePress = (index: number) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likeCounts = updatedPosts[index].likeCounts + (updatedPosts[index].liked ? -1 : 1);
    updatedPosts[index].liked = !updatedPosts[index].liked;
    setPosts(updatedPosts);
  };
  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={data}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} titleColor={'green'}
      />
    }
      renderItem={({item, index}:any) => (
        <SingleReel 
        item={item} 
        index={index} 
        currentIndex={currentIndex} 
        likeCounts={item.likeCounts}
        liked={item.liked}
        onLikePress={handleLikePress}
        />
      )}
      keyExtractor={(item:any, index:any) => index}
    />
  );
};
export default ReelsComponent;