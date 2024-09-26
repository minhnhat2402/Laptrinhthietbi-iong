import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

// The main component
export default function App() {
  const handleLogin = () => {
    Alert.alert("Login functionality coming soon!");
  };

  const handleSignUp = () => {
    Alert.alert("Sign up functionality coming soon!");
  };

  const handleHowWeWork = () => {
    Alert.alert("How we work section coming soon!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <View style={styles.innerCircle}></View>
      </View>
      <Text style={styles.heading}>Grow Your Business</Text>
      <Text style={styles.text}>We will help you to grow your business using an online server</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleHowWeWork}>
        <Text style={styles.howWeWork}>HOW WE WORK?</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bfff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  innerCircle: {
    width:80,
    height: 80,
    backgroundColor: '#00bfff',  // Same as background color for transparency effect
    borderRadius: 200,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    color: '#000',
  },
  text: {
    fontSize: 16,
    marginBottom: 30,
    color: '#000',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  howWeWork: {
    fontSize: 18,
    color: '#000',
    marginTop: 30,
    textDecorationLine: 'underline',
  },
});
