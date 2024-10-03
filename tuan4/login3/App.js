import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity } from 'react-native';

export default function App() {
  const [passwordLength, setPasswordLength] = useState('');
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSpecialSymbol, setIncludeSpecialSymbol] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>PASSWORD GENERATOR</Text>
        <View style={styles.passwordDisplay}></View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password length</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={passwordLength}
            onChangeText={setPasswordLength}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Include lower case letters</Text>
          <Switch
            value={includeLowerCase}
            onValueChange={setIncludeLowerCase}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Include upper case letters</Text>
          <Switch
            value={includeUpperCase}
            onValueChange={setIncludeUpperCase}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Include number</Text>
          <Switch
            value={includeNumber}
            onValueChange={setIncludeNumber}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Include special symbol</Text>
          <Switch
            value={includeSpecialSymbol}
            onValueChange={setIncludeSpecialSymbol}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#4C51BF',
    padding: 20,
    borderRadius: 10,
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  passwordDisplay: {
    backgroundColor: '#2D3748',
    height: 40,
    marginBottom: 20,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  label: {
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    width: 50,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#5A67D8',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});