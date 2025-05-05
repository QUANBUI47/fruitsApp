import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Phần trên: Nền cam, hình ảnh */}
      <View style={styles.topSection}>
        <Image source={require('../assets/fruit-basket.png')} style={styles.image} />
      </View>
      {/* Phần dưới: Nền trắng, nội dung và nút */}
      <View style={styles.bottomSection}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Get The Freshest Fruit Salad Combo</Text>
          <Text style={styles.subtitle}>
            We deliver the best and freshest fruit salad in town. Order for a combo today!!!
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Auth')}
        >
          <Text style={styles.buttonText}>Let's Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8C00',
  },
  topSection: {
    flex: 2, // Chiếm 2/3 màn hình
    backgroundColor: '#FF8C00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  bottomSection: {
    flex: 1, // Chiếm 1/3 màn hình
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    justifyContent: 'space-between',
  },
  textContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Đổi màu thành đen
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#000', // Đổi màu thành đen
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF9F43', // Màu cam
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff', // Chữ màu trắng
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;