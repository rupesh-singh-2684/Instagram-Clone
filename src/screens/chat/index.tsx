import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import { Icons } from '../../assets';
import chatData from '../../assets/data/chatData';
import InputBox from '../../components/InputBox';

const MessagesScreen = () => {
  const navigation:any = useNavigation();
  const renderItem = ({item}:any) => (
    <View style={styles.listContainer}>
      <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate('ChatScreen',{ users: item })}>
        <Image source={{uri:item.user.imageUri}} style={styles.profilePic} />
        <View style={styles.chatDetails}>
          <Text style={styles.userName}>{item.user.name}</Text>
          <Text style={styles.userDetails}>
            Sent a reel by @{item.user.name} • {item.postedAt}
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            source={Icons.camera}
            style={styles.cameraImg}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={Icons.back}
            style={styles.backImg}
          />
        </TouchableOpacity>
        <View style={styles.idContainer}>
          <Text style={styles.id}>rupesh_singh</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={Icons.post}
            style={styles.newMsg}
          />
        </TouchableOpacity>
      </View>
      <InputBox
        placeholder={'Ask Meta AI or Search'}
        style={styles.inputText}
      />
      <View style={styles.subContainer}>
        <Text style={styles.msgText}>Messages</Text>
        <TouchableOpacity>
          <Text style={styles.RequestText}>Requests</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default MessagesScreen;
