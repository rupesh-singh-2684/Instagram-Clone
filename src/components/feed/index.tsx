import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Post from '../post'
import Stories from '../stories'
import post from '../../assets/data/post'

const Feed = () => {
    return (
        <FlatList
            data={post}
            keyExtractor={({ id }: any) => id}
            renderItem={({ item }) => <Post post={item} />}
            contentContainerStyle={{ paddingBottom: 120 }}
            ListHeaderComponent={Stories}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default Feed