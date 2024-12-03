import { View, Text, FlatList } from 'react-native'
import React from 'react'

import Stories from '../stories'
import post from '../../assets/data/post'
import Post from '../post'
import styles from './styles'

const Feed = () => {
    return (
        <FlatList
            data={post}
            keyExtractor={({id}: any) => id}
            renderItem={({item}) => <Post post={item} />}
            contentContainerStyle={styles.contentContainerStyle}
            ListHeaderComponent={Stories}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default Feed