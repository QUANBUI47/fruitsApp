import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const CompleteDetailsScreen = ({ route, navigation }) => {
  const { orders } = route.params;
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Go back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>My Basket</Text>
      <Text style={styles.sectionTitle}>Delivery address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
      />
      <Text style={styles.sectionTitle}>Number we can call</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={setPhone}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('InputCardDetails', { orders })}
      >
        <Text style={styles.buttonText}>Pay on delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('InputCardDetails', { orders })}
      >
        <Text style={styles.buttonText}>Pay with card</Text>
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF8C00',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CompleteDetailsScreen;