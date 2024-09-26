import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#b3e5fc', '#4fc3f7']}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>CODE</Text>
        <Text style={styles.subtitle}>VERIFICATION</Text>
        <Text style={styles.instruction}>Enter onetime password sent on</Text>
        <Text style={styles.phoneNumber}>++849092605798</Text>
        <View style={styles.codeContainer}>
          <TextInput style={styles.codeInput} maxLength={1} keyboardType="numeric" />
          <TextInput style={styles.codeInput} maxLength={1} keyboardType="numeric" />
          <TextInput style={styles.codeInput} maxLength={1} keyboardType="numeric" />
          <TextInput style={styles.codeInput} maxLength={1} keyboardType="numeric" />
          <TextInput style={styles.codeInput} maxLength={1} keyboardType="numeric" />
          <TextInput style={styles.codeInput} maxLength={1} keyboardType="numeric" />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 24,
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
  },
  phoneNumber: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  codeContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  codeInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 4,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});