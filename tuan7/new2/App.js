import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={24} color="gray" />
        </TouchableOpacity>
        <View style={styles.profile}>
          <Image
            source={{ uri: 'https://placehold.co/50x50' }}
            style={styles.profileImage}
          />
          <View style={styles.profileText}>
            <Text style={styles.greeting}>Hi Twinkle</Text>
            <Text style={styles.subGreeting}>Have a great day ahead</Text>
          </View>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
        />
      </View>
      <ScrollView style={styles.taskList}>
        {['To check email', 'UI task web page', 'Learn javascript basic', 'Learn HTML Advance', 'Medical App UI', 'Learn Java'].map((task, index) => (
          <View key={index} style={styles.taskItem}>
            <View style={styles.taskTextContainer}>
              <FontAwesome name="check-square" size={24} color="green" />
              <Text style={styles.taskText}>{task}</Text>
            </View>
            <FontAwesome name="pen" size={24} color="red" />
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addButton}>
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileText: {
    marginLeft: 8,
  },
  greeting: {
    fontSize: 18,
    fontWeight: '500',
  },
  subGreeting: {
    fontSize: 14,
    color: 'gray',
  },
  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  taskList: {
    width: '100%',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  taskTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    marginLeft: 8,
    fontSize: 16,
  },
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 32,
  },
});