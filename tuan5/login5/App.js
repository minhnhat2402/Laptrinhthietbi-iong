import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#6B7280" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#6B7280" secureTextEntry />
        <FontAwesome name="eye" size={24} color="black" style={styles.icon} />
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>When you agree to terms and conditions</Text>
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>For got your password?</Text>
      </TouchableOpacity>
      <Text style={styles.orLoginWithText}>Or login with</Text>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <FontAwesome name="facebook-f" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.zButton]}>
          <Text style={styles.zButtonText}>Z</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <FontAwesome name="google" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F4F1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#E5E7EB',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  icon: {
    marginLeft: 10,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#E55342',
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 10,
  },
  forgotPasswordText: {
    fontSize: 12,
    color: '#3B82F6',
    textAlign: 'center',
    marginBottom: 20,
  },
  orLoginWithText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 10,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  facebookButton: {
    backgroundColor: '#1877F2',
  },
  zButton: {
    backgroundColor: '#3B82F6',
  },
  zButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  googleButton: {
    backgroundColor: '#F4B400',
  },
});