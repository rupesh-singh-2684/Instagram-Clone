import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image,} from 'react-native';
import Video from 'react-native-video';
import { Icons } from '../../assets';
import styles from './styles';

const SingleReel = ({ item, index, currentIndex ,likeCounts, liked, onLikePress }: any) => {

  const videoRef = useRef(null);
  const [mute, setMute] = useState(false);
  const [localLiked, setLocalLiked] = useState(liked);
  const [localLikeCounts, setLocalLikeCounts] = useState(likeCounts);

  const onLikePressed = () => {
    setLocalLiked(!localLiked);
    onLikePress(index);
  };
  useEffect(() => {
    setLocalLikeCounts(likeCounts);
    setLocalLiked(liked);
  }, [likeCounts, liked]);
  
  return (
    <View style={styles.mainContainer}>
      <View
        style={styles.container}>
        <TouchableOpacity activeOpacity={0.9} onPress={() => setMute(!mute)}
          style={styles.reelContainer}>
          <Video
            videoRef={videoRef}
            repeat={true}
            resizeMode="cover"
            paused={currentIndex === index ? false : true}
            source={{ uri: item.videoUri }}
            muted={mute}
            style={styles.reels}
          />
        </TouchableOpacity>
        <View style={styles.details}>
          <View>
            <TouchableOpacity>
              <View
                style={styles.userDetails}>
                <View
                  style={styles.profileImg}>
                  <Image
                    source={{ uri: item.user.imageUri }}
                    style={styles.img}
                  />
                </View>
                <Text style={styles.userName}>{item.user.name}</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.captions}>
              {item.captions}
            </Text>
            <View style={styles.music}>
              <Text style={styles.audioText}>Original Audio</Text>
            </View>
          </View>
        </View>
        <View
          style={styles.iconsContainer}>
          <TouchableOpacity
            onPress={onLikePressed}
            style={styles.icons}>
            <Image
              source={
                localLiked
                  ? Icons.heart
                  : Icons.homeNotification
              }
              style={styles.likeImg}
            />
            <Text style={styles.likeCounts}>{localLikeCounts}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <Image
              source={Icons.comments}
              style={styles.commentsImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <Image
              source={Icons.share}
              style={styles.shareImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <Image
              source={Icons.hotizontalDots}
              style={styles.threeDots}
            />
          </TouchableOpacity>
          <View
            style={styles.audio}>
            <Image
              source={{uri:item.user.imageUri}}
              style={styles.audioImg}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SingleReel;


