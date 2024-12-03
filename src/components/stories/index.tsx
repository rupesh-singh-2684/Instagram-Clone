import {FlatList} from 'react-native'
import React from 'react'
import Story from '../story'
import data from '../../assets/data/stories1'
import styles from './styles'

const Stories = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={({user: {id }}:any) => id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
            renderItem={({item}) => <Story story={item} />}
        />
    )
}

export default Stories