import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Icons, Images } from '../../assets'
import { useNavigation, useRoute } from '@react-navigation/native'
import images from '../../assets/data/profilePost'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = ({route}:any) => {

  const navigation:any = useNavigation();
  const [isActiveIndex, setIsActiveIndex] = useState(0)
  // console.log('jhsdabjhbasdjvbh=>>>>>>>',route)
  const [posts, setPosts] = useState([]);
  const { name, bio, userName, imageUri, newPostImage } = route.params as { name: any, userName: any, bio: any, imageUri: any, newPostImage:any } || { imageUri: Images.profileImage3 }
  
  // console.log(route.params,'dghjasgdjgajhdgadjhad');
  
  useEffect(() => {
    fetchPostsFromStorage();

    if (newPostImage) {
      addNewPostImage(newPostImage);
    }
  }, [newPostImage]);

  const addNewPostImage = async (uri: string) => {
    try {
      const storedPosts = await AsyncStorage.getItem('@user_posts');
      const postsArray = storedPosts ? JSON.parse(storedPosts) : [];

      if (!postsArray.some((post: any) => post.imageUri === uri)) {
        postsArray.push({ imageUri: uri });
        await AsyncStorage.setItem('@user_posts', JSON.stringify(postsArray));
        setPosts(postsArray);
      }
    } catch (error) {
      console.error('Failed to save the new post image:', error);
    }
  };

  const fetchPostsFromStorage = async () => {
    try {
      const storedPosts = await AsyncStorage.getItem('@user_posts');
      if (storedPosts) {
        setPosts(JSON.parse(storedPosts));
      }
    } catch (error) {
      console.error('Failed to fetch posts from AsyncStorage:', error);
    }
  };

  const onPressed = (index: any) => {
    setIsActiveIndex(index)
  }
  const render = () => {
    return posts.map((post, index) => {
      // console.log(posts,'imageimageimageimage');
      return (
        (
          <TouchableOpacity key={index} style={[styles.renderPost, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]} onPress={() => navigation.navigate('ProfilePostDetailScreen', { name, bio, userName, imageUri, post })}>
            <Image style={styles.renderImg}
              source={{uri: post.imageUri}}/>
          </TouchableOpacity>
        )
      )
    })
  }
  const renderTag = () => {
    return images.map((image, index) => {
      return (
        <View key={index} style={[styles.renderPost, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
          <Image style={styles.renderImg}
            source={{uri: image.imageUri}} />
        </View>
      )
    })
  }
  
  const renderPost = () => {
    if (isActiveIndex == 0) {
      return (
        <View style={styles.render}>
          {render()}
        </View>
      )
    }
    else if (isActiveIndex == 2) {
      return (
        <View style={styles.render}>
          {renderTag()}
        </View>
      )
    }
  }

  const handleEdit = () => {
    navigation.navigate('EditProfile')
  }
  const handleSectionList = () => {
    navigation.navigate('SectionList')
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.userName}>{userName || 'Rupesh_Singh_'}</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image source={Icons.threads} style={styles.headerImg} />
            <Image source={Icons.post} style={styles.headerImg} />
            <TouchableOpacity onPress={handleSectionList}>
              <Image source={Icons.horizontalLine} style={styles.headerImg1} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <Image source={{ uri: imageUri || '/Users/admin/Desktop/InstagramClone/src/assets/images/profile.jpg' }} style={styles.userProfile} />
          </View>
          <View style={styles.countContainer}>
            <View style={styles.postDetails}>
              <Text style={styles.title1}>12</Text>
              <Text style={styles.title2}>posts</Text>
            </View>
            <View style={styles.postDetails}>
              <Text style={styles.title1}>401</Text>
              <Text style={styles.title2}>followers</Text>
            </View>
            <View style={styles.postDetails}>
              <Text style={styles.title1}>304</Text>
              <Text style={styles.title2}>following</Text>
            </View>
          </View>
        </View>

        <View style={styles.userProfileName}>
          <Text style={styles.title1}> {name || 'Rupesh_Singh'} </Text>
          <Text style={styles.bio}> {bio || 'Jai Shree Ram'} </Text>
        </View>

        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <Text style={styles.title1}>
              Edit profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.title1}>
              Share profile
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>
          <TouchableOpacity onPress={() => onPressed(0)} >
            {isActiveIndex == 0 ?
              <Image source={Icons.pressedAllPost}
                style={styles.headerImg1} />
              :
              <Image source={Icons.allPost}
                style={styles.headerImg1} />
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressed(1)} >
            {isActiveIndex == 1 ?
              <Image source={Icons.pressedReel}
                style={styles.headerImg1} />
              :
              <Image source={Icons.reelProfile}
                style={styles.headerImg1} />
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressed(2)} >
            {isActiveIndex == 2 ?
              <Image source={Icons.pressedTagPost}
                style={styles.headerImg1} />
              :
              <Image source={Icons.tagPost}
                style={styles.headerImg1} />
            }
          </TouchableOpacity>
        </View>
        {renderPost()}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile