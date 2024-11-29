import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SectionList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const SectionMenu = () => {
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
    </SafeAreaView>
  );
};



export default SectionMenu;