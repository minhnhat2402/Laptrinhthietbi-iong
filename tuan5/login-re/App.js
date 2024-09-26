import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>
      <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#4A4A4A" />
      <TextInput style={styles.input} placeholder="Phone" placeholderTextColor="#4A4A4A" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#4A4A4A" />
      <View style={styles.passwordContainer}>
        <TextInput style={styles.inputPassword} placeholder="Password" placeholderTextColor="#4A4A4A" secureTextEntry={true} />
        <Icon name="eye" size={20} color="#4A4A4A" style={styles.icon} />
      </View>
      <TextInput style={styles.input} placeholder="Birthday" placeholderTextColor="#4A4A4A" />
      <View style={styles.genderContainer}>
        <View style={styles.genderOption}>
          <TextInput type="radio" style={styles.radio} />
          <Text style={styles.genderText}>Male</Text>
        </View>
        <View style={styles.genderOption}>
          <TextInput type="radio" style={styles.radio} />
          <Text style={styles.genderText}>Female</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>When you agree to terms and conditions</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F4EA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004225',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#CDE8D6',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    color: '#4A4A4A',
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CDE8D6',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  inputPassword: {
    flex: 1,
    color: '#4A4A4A',
  },
  icon: {
    marginLeft: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4A4A4A',
    marginRight: 10,
  },
  genderText: {
    color: '#4A4A4A',
  },
  button: {
    width: '100%',
    backgroundColor: '#B0413E',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  footerText: {
    color: '#4A4A4A',
    fontSize: 12,
  },
});

export default RegisterScreen;