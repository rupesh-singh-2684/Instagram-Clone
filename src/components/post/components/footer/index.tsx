import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Icons } from '../../../../assets'

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
          <TouchableOpacity>
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
      <Text style={styles.likes}>{likeCounts} Likes</Text>
      <Text style={styles.captions}>{captions}</Text>
      <Text style={styles.time}>{postedAt}</Text>
    </View>
  )
}

export default Footer