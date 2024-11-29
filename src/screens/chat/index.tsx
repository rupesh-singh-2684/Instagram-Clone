import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles';
import { Icons } from '../../assets';
import { useNavigation } from '@react-navigation/native';

const users = [
  { id: '1', user: 'Alex', message: '4+ new messages', time: '13h' },
  { id: '2', user: 'Peter', message: 'Sent a reel', time: '15h' },
  { id: '3', user: 'Shubham', message: '3 new messages', time: '19h' },
  { id: '4', user: 'John', message: 'Sent a post', time: '1d' },
];

export default function MessagesScreen() {

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.messageItem} onPress={() => navigation.navigate('ChatScreen',{ users: item })}>
            <Image source={{ uri: '/Users/admin/Desktop/InstagramClone/src/assets/images/profile.jpg' }} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.messageText}>
                <Text style={styles.bold}>{item.user}</Text> {item.message}.
              </Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <View>
                <Image source={Icons.camera} style={{ height:25,width:25}}/>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
