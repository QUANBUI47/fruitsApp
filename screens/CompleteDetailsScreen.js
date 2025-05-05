import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useBasket } from './BasketContext';

export default function CompleteDetailsScreen() {
  const { basket, removeFromBasket } = useBasket();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [isShowBottomSheet, setIsShowBottomSheet] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');

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
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeFromBasket(item.id)}
      >
        <Ionicons name="close" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );

  const handleCheckout = () => {
    if (!deliveryAddress || !contactNumber) {
      alert('Please fill in both delivery address and contact number.');
      return;
    }
    setModalVisible(false);
    navigation.navigate('OrderComplete');
  };

  const handlePayWithCard = () => {
    if (!deliveryAddress || !contactNumber) {
      alert('Please fill in both delivery address and contact number.');
      return;
    }
    setModalVisible(false);
    navigation.navigate('InputCardDetails');
  };

  return (
    <View style={styles.container}>
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
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Modal cho thông tin giao hàng */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Delivery address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your address"
              placeholderTextColor="#888"
              value={deliveryAddress}
              onChangeText={setDeliveryAddress}
            />
            <Text style={styles.modalTitle}>Number we can call</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              placeholderTextColor="#888"
              value={contactNumber}
              onChangeText={setContactNumber}
              keyboardType="phone-pad"
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleCheckout}
              >
                <Text style={styles.modalButtonText}>Pay on delivery</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handlePayWithCard}
              >
                <Text style={styles.modalButtonText}>Pay with card</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FF9F43',
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 15,
    top: 15,
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  backText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
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
  removeButton: {
    marginLeft: 10,
    padding: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    color: '#333',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    backgroundColor: '#FF9F43',
    borderRadius: 10,
    paddingVertical: 15,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});