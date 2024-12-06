import { View, Text, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Icons } from '../../../../assets'
import RBSheet from 'react-native-raw-bottom-sheet'
import data from '../../../../assets/data/post'
import { MoreOptionScreen } from '../../../modalMoreOption'
import { useDispatch, useSelector } from 'react-redux'
import {removeSavedPost,addSavedPost} from '../../../../redux/slice/index'
import styles from './styles'

const Footer = ({ likeCounts: likeCountsProps, captions, postedAt,postId }: any) => {

  const [isLiked, setIsLike] = useState(false);
  const [likeCounts, setLikeCounts] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const dispatch = useDispatch();
  const savedPostIds = useSelector(state => state.savedPost.savedPostIds);

  useEffect(() => {
    setLikeCounts(likeCountsProps)
    setIsSaved(savedPostIds.includes(postId));
  }, [savedPostIds, postId]);

  const refRBSheet = useRef<any>();

  const onLikePressed = () => {
    setIsLike(!isLiked)
    const counts = isLiked ? -1 : 1;
    setLikeCounts(likeCounts + counts)
  }

  const onSavePressed = () => {
    setIsSaved((prevIsSaved) => !prevIsSaved);

    if (savedPostIds.includes(postId)) {
      dispatch(removeSavedPost(postId));
    } else {
      dispatch(addSavedPost(postId));
    }
  };

  const handleMoreOption = () => {
    refRBSheet.current.open();
  };

  const renderItem = ({ item, index, }: any) => (
    <MoreOptionScreen
      index={index}
      icon={item.comments.user.icon}
      name={item.comments.user.name}
      comments={item.comments.user.comments}
      time={item.comments.user.time}
      onPress={item.onPress}
    />
  );
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={onLikePressed}>
            {isLiked ?
              <Image source={Icons.heart}
                style={styles.love} />
              : <Image source={Icons.homeNotification}
                style={styles.love} />
            }
          </TouchableOpacity>
          <Text style={styles.likes}>{likeCounts} Likes</Text>
          <TouchableOpacity onPress={() =>handleMoreOption(item.id)}>
            <Image source={Icons.comments}
              style={styles.love} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Icons.share}
              style={styles.love} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onSavePressed}>
          <View style={styles.iconsContainer}>
          {isSaved ?
              <Image source={Icons.bookmark2}
                style={styles.love} />
              : <Image source={Icons.bookmark}
                style={styles.love} />
            }
            </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.captions}>{captions}</Text>
      <Text style={styles.time}>{postedAt}</Text>
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask
        useNativeDriver={false}
        draggable={true}
        height={Dimensions.get('window').height / 1.8}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: '#E5E5E5',
            width: '12%',
          },
          container: {
            borderRadius: 20,
            marginTop: 'auto',
          },
        }}
        onClose={() => console.log('Bottom Sheet closed')}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index): any => index.toString}
        />
      </RBSheet>
    </View>
  )
}
export default Footer