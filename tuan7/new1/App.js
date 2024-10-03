import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://storage.googleapis.com/a1aa/image/tpjzaXy4sCoQAlOM0CJU1JKT8JdcE7wWsejFFmrkRpYJGdxJA.jpg' }}
        style={styles.image}
      />
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="gray" style={styles.icon} />
        <TextInput placeholder="Enter your name" style={styles.input} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>GET STARTED</Text>
        <FontAwesome name="arrow-right" size={16} color="white" style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 24,
  },
  title: {
    color: '#8b5cf6',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 24,
    width: '80%',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#14b8a6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonIcon: {
    marginLeft: 8,
  },
});