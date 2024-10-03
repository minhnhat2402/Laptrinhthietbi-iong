import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://storage.googleapis.com/a1aa/image/HP9k7geGsCSUAqLlvmUAeozaVc4lTX90jio6jiTeYr5fUpLOB.jpg' }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.greeting}>Hi Twinkle</Text>
          <Text style={styles.subGreeting}>Have a great day ahead</Text>
        </View>
      </View>
      <Text style={styles.title}>ADD YOUR JOB</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="tasks" size={24} color="green" style={styles.icon} />
        <TextInput style={styles.input} placeholder="input your job" />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>FINISH →</Text>
      </TouchableOpacity>
      <Image
        source={{ uri: 'https://storage.googleapis.com/a1aa/image/1NdELtVKUUotKhHelygxwtHEzqvyPPLe1OjCVJqksUQOV6iTA.jpg' }}
        style={styles.notepadImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 14,
    color: 'gray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 24,
    width: '100%',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
  },
  button: {
    backgroundColor: '#00BFFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  notepadImage: {
    width: 150,
    height: 150,
    marginTop: 32,
  },
});