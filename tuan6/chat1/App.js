import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.headerTitle}>Chat</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="search" size={24} color="white" />
          <Ionicons name="cart" size={24} color="white" />
        </View>
      </View>
      <Text style={styles.infoText}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
      </Text>
      <ScrollView style={styles.chatList}>
        {chatItems.map((item, index) => (
          <View key={index} style={styles.chatItem}>
            <Image source={{ uri: item.image }} style={styles.chatImage} />
            <View style={styles.chatDetails}>
              <Text style={styles.chatTitle}>{item.title}</Text>
              <Text style={styles.chatShop}>{item.shop}</Text>
            </View>
            <TouchableOpacity style={styles.chatButton}>
              <Text style={styles.chatButtonText}>Chat</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <FontAwesome name="home" size={24} color="white" />
        <FontAwesome name="heart" size={24} color="white" />
        <FontAwesome name="comment" size={24} color="white" />
        <FontAwesome name="user" size={24} color="white" />
      </View>
    </View>
  );
}

const chatItems = [
  {
    image: 'https://placehold.co/50x50',
    title: 'Ca nấu lẩu, nấu mì mini...',
    shop: 'Shop Devang',
  },
  {
    image: 'https://placehold.co/50x50',
    title: '1KG KHÔ GÀ BƠ TỎI...',
    shop: 'Shop LTD Food',
  },
  {
    image: 'https://placehold.co/50x50',
    title: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi',
  },
  {
    image: 'https://placehold.co/50x50',
    title: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
  },
  {
    image: 'https://placehold.co/50x50',
    title: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
  },
  {
    image: 'https://placehold.co/50x50',
    title: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    padding: 16,
    textAlign: 'center',
    color: '#555',
  },
  chatList: {
    backgroundColor: 'white',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  chatImage: {
    width: 50,
    height: 50,
  },
  chatDetails: {
    flex: 1,
    marginLeft: 16,
  },
  chatTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  chatShop: {
    fontSize: 12,
    color: '#ff0000',
  },
  chatButton: {
    backgroundColor: '#ff0000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  chatButtonText: {
    color: 'white',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#007bff',
  },
});