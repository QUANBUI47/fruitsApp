import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const OrderListScreen = ({ route, navigation }) => {
  const [orders, setOrders] = useState(route.params?.item ? [{ ...route.params.item, quantity: route.params.quantity }] : []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardPrice}>{item.price}</Text>
        <Text style={styles.cardQuantity}>{item.quantity}packs</Text>
      </View>
      <TouchableOpacity onPress={() => setOrders(orders.filter((order) => order.id !== item.id))}>
        <Text style={styles.removeButton}>X</Text>
      </TouchableOpacity>
    </View>
  );

  const total = orders.reduce((sum, order) => sum + parseInt(order.price.replace('₦', '').replace(',', '')) * order.quantity, 0);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Go back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>My Basket</Text>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.total}>Total: ₦{total}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CompleteDetails', { orders })}
      >
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8C00',
    padding: 20,
  },
  backText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: 50,
    height: 50,
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardPrice: {
    fontSize: 14,
    color: '#666',
  },
  cardQuantity: {
    fontSize: 14,
    color: '#666',
  },
  removeButton: {
    fontSize: 20,
    color: '#FF0000',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#FF8C00',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OrderListScreen;