import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OrderCompleteScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.checkmarkContainer}>
        <Text style={styles.checkmark}>✔</Text>
      </View>
      <Text style={styles.title}>Congratulations!!!</Text>
      <Text style={styles.subtitle}>Your order have been taken and is being attended to</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TrackOrder')}
      >
        <Text style={styles.buttonText}>Track order</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonSecondaryText}>Continue shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  checkmarkContainer: {
    backgroundColor: '#00FF00',
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkmark: {
    fontSize: 50,
    color: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
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
  },
  buttonSecondary: {
    borderColor: '#FF8C00',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
  },
  buttonSecondaryText: {
    color: '#FF8C00',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderCompleteScreen;