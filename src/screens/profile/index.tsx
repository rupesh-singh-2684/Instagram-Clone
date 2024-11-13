import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Icons, Images } from '../../assets'
import post from '../../assets/data/post'
import Post from '../../components/post'
import Stories from '../../components/stories'
import stories from '../../assets/data/stories'
import profilePost from '../../assets/data/profilePost'

const Profile = () => {
  const [isActiveIndex, setIsActiveIndex] = useState(0)

  const onPressed = (index) => {
    setIsActiveIndex(index)
  }

  const images = [
    require('/Users/admin/Desktop/InstagramClone/src/assets/images/profile.jpg'),
    require('/Users/admin/Desktop/InstagramClone/src/assets/images/profile1.jpeg'),
    require('/Users/admin/Desktop/InstagramClone/src/assets/images/profile3.jpeg'),
    require('/Users/admin/Desktop/InstagramClone/src/assets/images/profile3.jpeg'),
    require('/Users/admin/Desktop/InstagramClone/src/assets/images/profile3.jpeg'),
    require('/Users/admin/Desktop/InstagramClone/src/assets/images/profile1.jpeg'),
    require('/Users/admin/Desktop/InstagramClone/src/assets/images/profile3.jpeg'),
    require('/Users/admin/Desktop/InstagramClone/src/assets/images/profile1.jpeg'),
    require('/Users/admin/Desktop/InstagramClone/src/assets/images/profile3.jpeg'),
    require('/Users/admin/Desktop/InstagramClone/src/assets/images/profile.jpg'),
    require('/Users/admin/Desktop/InstagramClone/src/assets/images/profile3.jpeg'),
    require('/Users/admin/Desktop/InstagramClone/src/assets/images/profile1.jpeg'),
  ]

  const render =() =>{
    return images.map((image,index)=>{
      return(
        <View key={index} style={[{width:Dimensions.get('window').width/3,height:Dimensions.get('window').width/3, marginBottom:2} ,index % 3 !== 0 ? {paddingLeft:2} : {paddingLeft:0}]}>
            <Image style={{flex:1,width:undefined, height:undefined}}
            source={image}/>
        </View>
      )
    })
  }
  const renderTag =() =>{
    return images.map((image,index)=>{
      return(
        <View key={index} style={[{width:Dimensions.get('window').width/3,height:Dimensions.get('window').width/3, marginBottom:2} ,index % 3 !== 0 ? {paddingLeft:2} : {paddingLeft:0}]}>
            <Image style={{flex:1,width:undefined, height:undefined}}
            source={image}/>
        </View>
      )
    })
  }

  const renderPost = () => {
    if(isActiveIndex == 0){
      return(
        <View style={{flexDirection:'row',flexWrap:'wrap',flex:1,marginTop:10}}>
          {render()}
        </View>
      )
    }
    else if(isActiveIndex == 2){
      return(
        <View style={{flexDirection:'row',flexWrap:'wrap',flex:1,marginTop:10}}>
          {renderTag()}
        </View>
      )
    }
  }

  return (
    
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.userName}>rupesh_singh_baghel</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image source={Icons.threads} style={styles.headerImg} />
          <Image source={Icons.post} style={styles.headerImg} />
          <Image source={Icons.horizontalLine} style={styles.headerImg1} />
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <Image source={Images.profileImage} style={styles.userProfile} />
        </View>
        <View style={styles.countContainer}>
          <View style={styles.postDetails}>
            <Text style={styles.title1}>12</Text>
            <Text style={styles.title2}>posts</Text>
          </View>
          <View style={styles.postDetails}>
            <Text style={styles.title1}>398</Text>
            <Text style={styles.title2}>followers</Text>
          </View>
          <View style={styles.postDetails}>
            <Text style={styles.title1}>304</Text>
            <Text style={styles.title2}>following</Text>
          </View>
        </View>
      </View>

      <View style={styles.userProfileName}>
        <Text style={styles.title1}> Rupesh Singh Baghel </Text>
        <Text style={styles.bio}>🕉️ Sanatani 🕉️</Text>
        <Text style={styles.bio}>📍 Noida </Text>
        <Text style={styles.bio}>🙏 Jai Shree Ram 🙏</Text>
      </View>

      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.editButton}>
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

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
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