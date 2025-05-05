import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useBasket } from './BasketContext';

export default function AddToBasketScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { product } = route.params;
  const { addToBasket } = useBasket();
  const [quantity, setQuantity] = useState(1);

  const handleAddToBasket = () => {
    addToBasket(product, quantity);
    navigation.navigate('OrderList');
  };

  const ingredients = product.ingredients || "Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.";
  const description = product.description || "If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make";

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={20} color="#fff" />
        <Text style={styles.backText}>Go back</Text>
      </TouchableOpacity>

      <Image source={product.image} style={styles.productImage} />

      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => setQuantity(quantity + 1)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.price}>{product.price}</Text>
        </View>

        <Text style={styles.sectionTitle}>One Pack Contents:</Text>
        <Text style={styles.contents}>{ingredients}</Text>
        <Text style={styles.description}>{description}</Text>

        {/* Footer (trái tim + nút Add to basket) nằm trong cùng infoContainer */}
        <View style={styles.footer}>
          <Ionicons name="heart-outline" size={24} color="#FF6F61" />
          <TouchableOpacity style={styles.addButton} onPress={handleAddToBasket}>
            <Text style={styles.addButtonText}>Add to basket</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9F43',
    paddingHorizontal: 15,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  backText: {
    marginLeft: 3,
    fontSize: 14,
    color: '#fff', // Đổi màu chữ thành trắng
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: 20,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00008B',
    textAlign: 'center',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 24,
    color: '#000',
  },
  quantity: {
    fontSize: 20,
    marginHorizontal: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  contents: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  addButton: {
    backgroundColor: '#FF9F43',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});