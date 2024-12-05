import {FlatList, RefreshControl } from 'react-native'
import React, { useCallback, useState } from 'react'
import Stories from '../stories'
import post from '../../assets/data/post'
import Post from '../post'
import styles from './styles'
import post1 from '../../assets/data/post1'

const Feed = () => {

    const [isRefreshing, setIsRefreshing] = useState(false);
    const [data, setData] = useState(post);

    const onRefresh = useCallback(() => {
        setIsRefreshing(true);
        
        setTimeout(() => {
          setIsRefreshing(false);
          setData((prevData) => (prevData === post ? post1 : post));
        }, 1000);
      }, []);
    return (
        <FlatList
            data={data}
            keyExtractor={({id}: any) => id}
            renderItem={({item}) => <Post post={item} />}
            contentContainerStyle={styles.contentContainerStyle}
            ListHeaderComponent={Stories}
            showsVerticalScrollIndicator={false}
            refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} 
            />
            }
        />
    )
}

export default Feed