import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles';
import { Images } from '../../assets';

const notifications = [
  { id: '1', user: 'arsh', time: '18h', action: 'started following you', followBack: true },
  { id: '2', user: 'sam76', time: '3d', action: 'started following you', followBack: true },
  { id: '3', user: 'sriva._', time: '4d', action: 'is on Instagram', follow: true },
  { id: '4', user: 'ayush', time: '4d', action: 'liked your reel' },
];

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Image source={{ uri:'/Users/admin/Desktop/InstagramClone/src/assets/images/profile3.jpeg'}} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.notificationText}>
                <Text style={styles.bold}>{item.user}</Text> {item.action}.
              </Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            {item.followBack && (
              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.buttonText}>Follow Back</Text>
              </TouchableOpacity>
            )}
            {item.follow && (
              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.buttonText}>Follow</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
}
