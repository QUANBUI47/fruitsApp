import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const InputCardDetailsScreen = ({ navigation }) => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [ccv, setCcv] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Go back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>My Basket</Text>
      <Text style={styles.sectionTitle}>Card Holders Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter card holder's name"
        value={cardHolder}
        onChangeText={setCardHolder}
      />
      <Text style={styles.sectionTitle}>Card Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter card number"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <View style={styles.row}>
        <View style={styles.half}>
          <Text style={styles.sectionTitle}>Date</Text>
          <TextInput
            style={styles.input}
            placeholder="MM/YY"
            value={expiry}
            onChangeText={setExpiry}
          />
        </View>
        <View style={styles.half}>
          <Text style={styles.sectionTitle}>CCV</Text>
          <TextInput
            style={styles.input}
            placeholder="CCV"
            value={ccv}
            onChangeText={setCcv}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('OrderComplete')}
      >
        <Text style={styles.buttonText}>Complete Order</Text>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  half: {
    width: '48%',
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

export default InputCardDetailsScreen;