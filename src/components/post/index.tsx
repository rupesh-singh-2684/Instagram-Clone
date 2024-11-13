import { View, Text } from 'react-native'
import React from 'react'
import Body from './components/body'
import Header from './components/header'
import Footer from './components/footer'

const Post = ({ post }: any) => {
  return (
    <View>
      <Header imageUri={post.user.imageUri} name={post.user.name} />
      <Body imageUri={post.imageUri} />
      <Footer likeCounts={post.likeCounts} captions={post.captions} postedAt={post.postedAt} imageUri={post.comments.user.imagePro} name={post.comments.user.name} comments={post.comments.user.comments}/>
    </View>
  )
}

export default Post