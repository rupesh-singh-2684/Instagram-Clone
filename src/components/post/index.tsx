import { View, Text } from 'react-native'
import React from 'react'

import Body from './components/body'
import Header from './components/header'
import Footer from './components/footer'

const Post = ({post}:any) => {
  return (
    <View>
        <Header imageUri={post.user.imageUri} name={post.user.name}/>
        <Body imageUri={post.imageUri}/>
        <Footer likeCounts={post.likeCounts} captions={post.captions} postedAt={post.postedAt}/>
    </View>
  )
}

export default Post