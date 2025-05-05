import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useBasket } from './BasketContext';

const InputCardDetailsScreen = () => {
  const navigation = useNavigation();
  const { basket, removeFromBasket } = useBasket();
  const [modalVisible, setModalVisible] = useState(true); // Modal hiển thị ngay khi vào màn hình
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [ccv, setCcv] = useState('');

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

  const handleCompleteOrder = () => {
    if (!cardHolder || !cardNumber || !expiry || !ccv) {
      alert('Please fill in all card details.');
      return;
    }
    setModalVisible(false);
    navigation.navigate('OrderComplete');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
          <Text style={styles.backText}>Go back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>My Basket</Text>
      </View>

      {/* Danh sách sản phẩm */}
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
        </View>
      )}

      {/* Modal cho thông tin thẻ */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.sectionTitle}>Card Holder's Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter card holder's name"
              placeholderTextColor="#888"
              value={cardHolder}
              onChangeText={setCardHolder}
            />
            <Text style={styles.sectionTitle}>Card Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter card number"
              placeholderTextColor="#888"
              value={cardNumber}
              onChangeText={setCardNumber}
              keyboardType="numeric"
            />
            <View style={styles.row}>
              <View style={styles.half}>
                <Text style={styles.sectionTitle}>Date</Text>
                <TextInput
                  style={styles.input}
                  placeholder="MM/YY"
                  placeholderTextColor="#888"
                  value={expiry}
                  onChangeText={setExpiry}
                />
              </View>
              <View style={styles.half}>
                <Text style={styles.sectionTitle}>CCV</Text>
                <TextInput
                  style={styles.input}
                  placeholder="CCV"
                  placeholderTextColor="#888"
                  value={ccv}
                  onChangeText={setCcv}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleCompleteOrder}
            >
              <Text style={styles.buttonText}>Complete Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
  sectionTitle: {
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  half: {
    width: '48%',
  },
  button: {
    backgroundColor: '#FF9F43',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default InputCardDetailsScreen;