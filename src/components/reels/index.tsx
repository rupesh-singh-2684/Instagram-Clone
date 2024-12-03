import React, {useState} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import SingleReel from '../reel';
import post from '../../assets/data/post';

const ReelsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [posts, setPosts] = useState(post);

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
      data={post}
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