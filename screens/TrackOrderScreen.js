import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TrackOrderScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Phần chứa nút quay lại */}
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={20} color="#000" />
            <Text style={styles.backText}>Go back</Text>
          </TouchableOpacity>
        </View>

        {/* Phần tiêu đề */}
        <View style={styles.headerBottom}>
          <Text style={styles.title}>Delivery Status</Text>
        </View>
      </View>

      {/* Các bước giao hàng */}
      <View style={styles.stepsContainer}>
        <View style={styles.step}>
          <View style={styles.stepIconContainer}>
            <Ionicons name="document-text-outline" size={24} color="#00FF00" />
          </View>
          <Text style={styles.stepText}>Order Taken</Text>
          <View style={styles.stepStatus}>
            <Ionicons name="checkmark-circle" size={24} color="#00FF00" />
          </View>
        </View>
        <View style={styles.connector} />

        <View style={styles.step}>
          <View style={styles.stepIconContainer}>
            <Ionicons name="cart-outline" size={24} color="#00FF00" />
          </View>
          <Text style={styles.stepText}>Order Is Being Prepared</Text>
          <View style={styles.stepStatus}>
            <Ionicons name="checkmark-circle" size={24} color="#00FF00" />
          </View>
        </View>
        <View style={styles.connector} />

        <View style={styles.step}>
          <View style={styles.stepIconContainer}>
            <Ionicons name="bicycle-outline" size={24} color="#FF9F43" />
          </View>
          <View style={styles.stepTextContainer}>
            <Text style={styles.stepText}>Order Is Being Delivered</Text>
            <Text style={styles.stepSubText}>Your delivery agent is coming</Text>
          </View>
          <View style={styles.stepStatus}>
            <Ionicons name="ellipse" size={24} color="#FF9F43" />
          </View>
        </View>
        <View style={styles.connectorDashed} />

        <View style={styles.step}>
          <View style={styles.stepIconContainer}>
            <Ionicons name="checkmark-circle-outline" size={24} color="#ccc" />
          </View>
          <Text style={styles.stepText}>Order Received</Text>
          <View style={styles.stepStatus}>
            <Ionicons name="ellipse-outline" size={24} color="#ccc" />
          </View>
        </View>
      </View>

      {/* Bản đồ giả bằng hình ảnh */}
      <View style={styles.mapPlaceholder}>
        <Image
          source={{ uri: 'https://maps.gstatic.com/tactile/pane/default_geocode-2x.png' }}
          style={styles.mapImage}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FF9F43',
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTop: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  backText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#000',
  },
  headerBottom: {
    marginTop: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  stepsContainer: {
    padding: 20,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  stepIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  stepTextContainer: {
    flex: 1,
  },
  stepText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  stepSubText: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  stepStatus: {
    marginLeft: 10,
  },
  connector: {
    position: 'absolute',
    left: 45,
    top: 60,
    height: 60,
    width: 2,
    backgroundColor: '#00FF00',
    zIndex: -1,
  },
  connectorDashed: {
    position: 'absolute',
    left: 45,
    top: 180,
    height: 60,
    width: 2,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#ccc',
    zIndex: -1,
  },
  mapPlaceholder: {
    height: 200,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
});

export default TrackOrderScreen;
