import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [quantity, setQuantity] = useState(1);
  const [discountCode, setDiscountCode] = useState('');

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(quantity + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.bookInfo}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/NWtffyiC5CldnEgESimIPCEwwicJexSwuKvHjEniACsPzyFnA.jpg' }}
            style={styles.bookImage}
          />
          <View style={styles.bookDetails}>
            <Text style={styles.bookTitle}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.bookProvider}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.bookPrice}>141.800 đ</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.quantityButton} onPress={() => handleQuantityChange('decrement')}>
                <Text>-</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.quantityInput}
                value={String(quantity)}
                onChangeText={(text) => setQuantity(Number(text))}
                keyboardType="numeric"
              />
              <TouchableOpacity style={styles.quantityButton} onPress={() => handleQuantityChange('increment')}>
                <Text>+</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.buyLater}>Mua sau</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.viewMore}>Xem tại đây</Text>
        </TouchableOpacity>
        <View style={styles.discountContainer}>
          <TextInput
            style={styles.discountInput}
            placeholder="Mã giảm giá"
            value={discountCode}
            onChangeText={setDiscountCode}
          />
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.giftText}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?{' '}
          <Text style={styles.enterHere}>Nhập tại đây?</Text>
        </Text>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Tạm tính</Text>
          <Text style={styles.summaryPrice}>141.800 đ</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Thành tiền</Text>
          <Text style={styles.totalPrice}>141.800 đ</Text>
        </View>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f3f4f6',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  bookInfo: {
    flexDirection: 'row',
  },
  bookImage: {
    width: 60,
    height: 80,
  },
  bookDetails: {
    marginLeft: 16,
    flex: 1,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bookProvider: {
    fontSize: 12,
    color: '#6b7280',
  },
  bookPrice: {
    color: '#e11d48',
    fontWeight: 'bold',
    marginTop: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  quantityInput: {
    width: 40,
    textAlign: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#d1d5db',
  },
  buyLater: {
    color: '#3b82f6',
    fontSize: 12,
    marginLeft: 16,
  },
  viewMore: {
    color: '#3b82f6',
    fontSize: 12,
    marginTop: 16,
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  discountInput: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    padding: 8,
    flex: 2,
  },
  applyButton: {
    backgroundColor: '#3b82f6',
    padding: 8,
    flex: 1,
    alignItems: 'center',
    marginLeft: 8,
  },
  applyButtonText: {
    color: '#fff',
  },
  giftText: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 16,
  },
  enterHere: {
    color: '#3b82f6',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e5e7eb',
    padding: 8,
    marginTop: 16,
  },
  summaryText: {
    fontSize: 14,
  },
  summaryPrice: {
    color: '#e11d48',
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#d1d5db',
    padding: 8,
    marginTop: 8,
  },
  totalText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#e11d48',
    fontWeight: 'bold',
  },
  orderButton: {
    backgroundColor: '#ef4444',
    padding: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});