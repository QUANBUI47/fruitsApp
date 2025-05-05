import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OrderCompleteScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.checkmarkContainer}>
        <Ionicons name="checkmark" size={60} color="#fff" />
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
    borderRadius: 75,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00008B', // Đổi màu thành xanh đậm
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#000', // Đổi màu thành đen
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF9F43', // Đổi màu thành cam
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonSecondary: {
    borderColor: '#FF9F43', // Đổi màu viền thành cam
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonSecondaryText: {
    color: '#FF9F43', // Đổi màu chữ thành cam
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OrderCompleteScreen;