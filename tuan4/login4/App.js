import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/QXC1AKxeNC0DHq1XgVo0Wk97AgfusZSffeReWw8EYoeqD4cxJA.jpg' }}
            style={styles.image}
          />
          <View>
            <Text style={styles.title}>USB Bluetooth Music Receiver</Text>
            <Text style={styles.subtitle}>HJX-001 - Biến loa thường thành loa bluetooth</Text>
          </View>
        </View>
        <View style={styles.center}>
          <Text style={styles.ratingText}>Cực kỳ hài lòng</Text>
          <View style={styles.stars}>
            {[...Array(5)].map((_, index) => (
              <FontAwesome key={index} name="star" size={24} color="gold" style={styles.star} />
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="camera" size={24} color="blue" style={styles.icon} />
          <Text style={styles.buttonText}>Thêm hình ảnh</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Hãy chỉ sẻ những điều mà bạn thích về sản phẩm"
          multiline
        />
        <Text style={styles.link}>https://meet.google.com/naj-ojwi-xpp</Text>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  card: {
    width: 320,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
  center: {
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stars: {
    flexDirection: 'row',
    marginTop: 8,
  },
  star: {
    marginHorizontal: 4,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
    marginBottom: 16,
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: 'blue',
  },
  textInput: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 8,
  },
  link: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 16,
  },
  submitButton: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: 'blue',
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});