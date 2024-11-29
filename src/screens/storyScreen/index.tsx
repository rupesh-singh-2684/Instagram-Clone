import { View, Text, SafeAreaView, ImageBackground, ActivityIndicator, Image, Dimensions, TouchableWithoutFeedback, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import stories from '../../assets/data/stories';
import styles from './styles';
import Header from '../../components/post/components/header';
import ProfilePicture from '../../components/profilePicture';
import { Icons } from '../../assets';

const StoryScreen = () => {

  const [userStories, setUserStories]: any = useState();
  const [activeStoryIndex, setActiveStoryIndex]: any = useState();

  const route: any = useRoute();
  // console.log(route);
  const userId = route.params.userId;
  const navigation:any = useNavigation();

  useEffect(() => {
    const userStories = stories.find(storyData => storyData.user.id === userId)

    setUserStories(userStories)
    setActiveStoryIndex(0)
  }, [])

  const handlePress = (evt: any) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width
    if (x < screenWidth / 2) {
      handlePrevStory();
    }
    else {
      handleNexStory();
    }
  }

  const navigateToNextUser = () => {
    navigation.push("StoryScreen", { userId: (parseInt(userId) + 1).toString() })
  }

  const navigateToPrevUser = () => {
    navigation.push("StoryScreen", { userId: (parseInt(userId) - 1).toString() })

  }

  const handleNexStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      navigateToNextUser();
      return
    }
    setActiveStoryIndex(activeStoryIndex + 1)
  }

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPrevUser();
      return
    }
    setActiveStoryIndex(activeStoryIndex - 1)
  }

  if (!userStories) {
    return (
      <SafeAreaView style={styles.emptyStory}>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }
  const activeStory = userStories.stories[activeStoryIndex];

  const handleNav = () =>{
    navigation.navigate("Bottom")
  }

  return (
    <SafeAreaView style={styles.story}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground source={{ uri: activeStory.imageUri }} style={styles.img}>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <ProfilePicture uri={userStories.user.imageUri} size={40} />
              <Text style={styles.userName}>{userStories.user.name}</Text>
              <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
            </View>
            <TouchableOpacity onPress={handleNav}>            
              <Image source={Icons.close} style={styles.crossImg} />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <Image source={Icons.comments} style={styles.bottomImg} />
            <TextInput style={styles.input}
              placeholder='Send the messages...'
              placeholderTextColor={'white'} />
            <Image source={Icons.homeNotification} style={styles.bottomImg} />
            <Image source={Icons.share} style={styles.bottomImg} />
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default StoryScreen