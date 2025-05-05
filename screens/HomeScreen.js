import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

// Kích thước màn hình
const { width } = Dimensions.get('window');

// Dữ liệu giả lập cho các combo
const recommendedCombos = [
  { id: '1', name: 'Honey lime combo', price: '₦ 2,000', image: require('../assets/honey_lime_combo.png') },
  { id: '2', name: 'Berry mango combo', price: '₦ 8,000', image: require('../assets/berry_mango_combo.png') },
];

const hottestCombos = [
  { id: '3', name: 'Quinoa fruit salad', price: '₦ 10,000', image: require('../assets/quinoa_fruit_salad.png') },
  { id: '4', name: 'Tropical fruit salad', price: '₦ 10,000', image: require('../assets/tropical_fruit_salad.png') },
  { id: '5', name: 'Melo', price: '₦ 10,000', image: require('../assets/melo.png') },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const userName = route.params?.name || 'Guest';

  const renderComboItem = ({ item }) => (
    <View style={styles.comboItem}>
      <Image source={item.image} style={styles.comboImage} />
      <Ionicons name="heart-outline" size={24} color="#FF6F61" style={styles.heartIcon} />
      <Text style={styles.comboName}>{item.name}</Text>
      <Text style={styles.comboPrice}>{item.price}</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddToBasket', { product: item })}
      >
        <Ionicons name="add" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Phần đầu chiếm 1/3 màn hình */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.basketIcon}
            onPress={() => navigation.navigate('OrderList')}
          >
            <Ionicons name="basket" size={24} color="#FF6F61" />
            <Text style={styles.basketText}>My basket</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.greeting}>Hello {userName}, What fruit salad combo do you want today?</Text>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for fruit salad"
            placeholderTextColor="#888"
          />
          <TouchableOpacity>
            <Ionicons name="filter" size={20} color="#888" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Phần còn lại chiếm 2/3 màn hình */}
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Recommended Combo</Text>
        <FlatList
          data={recommendedCombos}
          renderItem={renderComboItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recommendedList}
        />

        <View style={styles.tabs}>
          <TouchableOpacity>
            <Text style={[styles.tab, styles.activeTab]}>Hottest</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.tab}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.tab}>New combo</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.tab}>Top</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={hottestCombos}
          renderItem={renderComboItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.hottestList}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    height: '33%', // Chiếm 1/3 màn hình
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 10, // Thêm paddingTop để đảm bảo không chèn lên tai thỏ
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  basketIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  basketText: {
    marginLeft: 5,
    color: '#FF6F61',
    fontWeight: 'bold',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#333',
  },
  contentContainer: {
    flex: 1, // Chiếm phần còn lại của màn hình
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  recommendedList: {
    justifyContent: 'space-between',
  },
  hottestList: {
    paddingBottom: 20,
  },
  comboItem: {
    width: width / 2 - 30,
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#FFF2E7',
    padding: 10,
    borderRadius: 10,
  },
  comboImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  heartIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  comboName: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  comboPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  addButton: {
    backgroundColor: '#FF6F61',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  tab: {
    fontSize: 16,
    color: '#888',
  },
  activeTab: {
    color: '#FF6F61',
    fontWeight: 'bold',
  },
});