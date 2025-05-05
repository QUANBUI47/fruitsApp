import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Image, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useBasket } from './BasketContext';

export default function OrderListScreen() {
  const { basket } = useBasket();
  const navigation = useNavigation();

  const calculateTotal = () => {
    return basket.reduce((total, item) => {
      const price = parseFloat(item.price.replace('₦ ', '').replace(',', ''));
      return total + price * item.quantity;
    }, 0);
  };

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Image source={item.image} style={styles.orderImage} />
      <View style={styles.orderDetails}>
        <Text style={styles.orderName}>{item.name}</Text>
        <Text style={styles.orderQuantity}>{item.quantity} packs</Text>
      </View>
      <Text style={styles.orderPrice}>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* StatusBar để điều chỉnh cho notch/hole-punch */}
      <StatusBar barStyle="light-content" backgroundColor="#FF9F43" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
          <Text style={styles.backText}>Go back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>My Basket</Text>
      </View>

      {/* Danh sách đơn hàng */}
      {basket.length === 0 ? (
        <Text style={styles.emptyText}>Your basket is empty.</Text>
      ) : (
        <View style={styles.orderListContainer}>
          <FlatList
            data={basket}
            renderItem={renderOrderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.orderList}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: ₦ {calculateTotal().toLocaleString()}</Text>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => navigation.navigate('CompleteDetails')}
            >
              <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // Thêm paddingTop để tránh notch/hole-punch trên Android
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0,
  },
  header: {
    backgroundColor: '#FF9F43',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    // Điều chỉnh paddingTop cho notch/hole-punch trên Vivo T1
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 40,
    elevation: 4, // Thêm shadow cho Android
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 15,
    top: Platform.OS === 'android' ? 10 : 15, // Điều chỉnh cho Vivo T1
  },
  backText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 5,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  orderListContainer: {
    flex: 1,
    paddingHorizontal: 15,
    // Thêm paddingBottom để tránh tràn lên thanh điều hướng
    paddingBottom: Platform.OS === 'android' ? 20 : 10,
  },
  orderList: {
    flexGrow: 1,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFF2E7',
    borderRadius: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  orderImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  orderDetails: {
    flex: 1,
  },
  orderName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  orderQuantity: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    // Thêm paddingBottom để tránh tràn lên thanh điều hướng
    paddingBottom: Platform.OS === 'android' ? 10 : 5,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  checkoutButton: {
    backgroundColor: '#FF9F43',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  checkoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});