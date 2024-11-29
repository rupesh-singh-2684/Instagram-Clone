import { View, Text, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import { Icons } from '../../../../assets'
import RBSheet from 'react-native-raw-bottom-sheet'
import data from '../../../../assets/data/post'
import { MoreOptionScreen } from '../../../modalMoreOption'

const Footer = ({ likeCounts: likeCountsProps, captions, postedAt }: any) => {

  const [isLiked, setIsLike] = useState(false);
  const [likeCounts, setLikeCounts] = useState(0);


  const onLikePressed = () => {
    setIsLike(!isLiked)

    const counts = isLiked ? -1 : 1;
    setLikeCounts(likeCounts + counts)
  }

  useEffect(() => {
    setLikeCounts(likeCountsProps)
  }, [])

  const refRBSheet = useRef<any>();

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
          <TouchableOpacity onPress={handleMoreOption}>
            <Image source={Icons.comments}
              style={styles.love} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Icons.share}
              style={styles.love} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.iconsContainer}>
            <Image source={Icons.bookmark}
              style={styles.love}
            />
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
          height={Dimensions.get('window').height/1.8}
          // style={{ overflow: 'hidden' }}
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
            keyExtractor={(item,index):any => index.toString} />

        </RBSheet>
    </View>
  )
}

export default Footer