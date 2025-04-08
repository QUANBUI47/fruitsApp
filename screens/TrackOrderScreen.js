import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TrackOrderScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Go back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Delivery Status</Text>
      <View style={styles.statusContainer}>
        <Text style={styles.status}>Order Taken ✔</Text>
        <Text style={styles.status}>Order is Being Prepared ✔</Text>
        <Text style={styles.status}>Order is Being Delivered</Text>
        <Text style={styles.status}>Your delivery agent is coming</Text>
        <Image source={require('../assets/map.png')} style={styles.map} />
        <Text style={styles.status}>Order Received ✔</Text>
      </View>
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
  statusContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  status: {
    fontSize: 16,
    marginVertical: 10,
  },
  map: {
    width: '100%',
    height: 200,
    marginVertical: 20,
  },
});

export default TrackOrderScreen;