import React from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f3f4f6' }}>
      {/* Header */}
      <View style={{ backgroundColor: '#3b82f6', padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome name="search" size={24} color="white" />
          <TextInput
            placeholder="Dây cáp usb"
            style={{ marginLeft: 8, padding: 4, backgroundColor: 'white', borderRadius: 4, width: 200 }}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome name="shopping-cart" size={24} color="white" />
          <FontAwesome name="ellipsis-v" size={24} color="white" style={{ marginLeft: 16 }} />
        </View>
      </View>

      {/* Product List */}
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {Array(6).fill().map((_, index) => (
          <View key={index} style={{ backgroundColor: 'white', padding: 8, borderRadius: 8, marginBottom: 16, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, shadowOffset: { width: 0, height: 2 } }}>
            <Image
              source={{ uri: 'https://placehold.co/150x150' }}
              style={{ width: 150, height: 150, alignSelf: 'center' }}
            />
            <Text style={{ fontSize: 14, marginTop: 8 }}>Cáp chuyển từ Cổng USB sang PS2...</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
              <FontAwesome name="star" size={14} color="#fbbf24" />
              <FontAwesome name="star" size={14} color="#fbbf24" />
              <FontAwesome name="star" size={14} color="#fbbf24" />
              <FontAwesome name="star" size={14} color="#fbbf24" />
              <FontAwesome name="star-half" size={14} color="#fbbf24" />
              <Text style={{ fontSize: 12, color: '#6b7280', marginLeft: 4 }}>(15)</Text>
            </View>
            <Text style={{ fontSize: 16, color: '#f59e0b', fontWeight: 'bold', marginTop: 4 }}>69.900 đ</Text>
            <Text style={{ fontSize: 12, color: '#6b7280' }}>-39%</Text>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={{ backgroundColor: '#3b82f6', padding: 16, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <FontAwesome name="home" size={24} color="white" />
        <FontAwesome name="search" size={24} color="white" />
        <FontAwesome name="shopping-cart" size={24} color="white" />
        <FontAwesome name="user" size={24} color="white" />
      </View>
    </View>
  );
}