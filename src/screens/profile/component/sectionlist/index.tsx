import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SectionList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 8,
    backgroundColor: "#f7f7f7",
    borderRadius: 6,
    marginBottom: 4,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemText: {
    fontSize: 14,
    color: "#555",
  },
});

export default SectionMenu;