import React from 'react';
import { View, Text, TouchableOpacity,SectionList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SectionMenu = () => {

  const navigation:any = useNavigation()
  const sections = [
    {
      title: "Settings",
      data: ["Account", "Privacy", "Notifications", "Theme"],
    },
    {
      title: "Your Activity",
      data: ["Time Spent", "Interactions", "Recent Searches"],
    },
    {
      title: "Other",
      data: ["Help", "Report a Problem", "About"],
    },
  ];

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Auth' }],
    });
  };

  const renderItem = ({ item }:any) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section: { title } }:any) => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={[styles.header,{marginHorizontal:15}]} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};



export default SectionMenu;