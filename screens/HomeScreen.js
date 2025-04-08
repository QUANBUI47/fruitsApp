import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const combos = [
  { id: '1', name: 'Honey lime combo', price: '₦2,000', image: require('../assets/honey-lime.png') },
  { id: '2', name: 'Berry mango combo', price: '₦8,000', image: require('../assets/berry-mango.png') },
  { id: '3', name: 'Quinoa fruit salad', price: '₦10,000', image: require('../assets/quinoa-salad.png') },
  { id: '4', name: 'Tropical fruit salad', price: '₦10,000', image: require('../assets/tropical-salad.png') },
];

const HomeScreen = ({ route, navigation }) => {
  const { name } = route.params;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('AddToBasket', { item })}
    >
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello {name}, What fruit salad combo do you want today?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('OrderList')}>
          <Text style={styles.basketText}>My basket</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Recommended Combo</Text>
      <FlatList
        data={combos.slice(0, 2)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
      />
      <Text style={styles.sectionTitle}>Hottest</Text>
      <FlatList
        data={combos.slice(2)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  basketText: {
    fontSize: 16,
    color: '#FF8C00',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  cardPrice: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#FF8C00',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default HomeScreen;