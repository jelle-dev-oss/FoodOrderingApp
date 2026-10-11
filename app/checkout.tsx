import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, } from 'react-native';


export default function Checkout() {
  const { name, quantity, total } = useLocalSearchParams();
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');

  return (
    
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <Text style={styles.headerTitle}> Checkout </Text>
        <Text style={styles.headerSubtitle}> Complete your order </Text>

      </View>

      <View style={styles.content}>

        {/* Order Summary */}
        <Text style={styles.sectionTitle}> Order Summary </Text>

          <View style={styles.orderCard}>

            <Text style={styles.foodName}> {name} </Text>
            <Text style={styles.orderInfo}> Quantity: {quantity} </Text>

            <View style={styles.divider} />

              <View style={styles.totalRow}>

                <Text style={styles.totalLabel}> Total </Text>
                <Text style={styles.total}> ₱{total} </Text>

              </View>

          </View>

        {/* Customer Information */}
        <Text style={styles.sectionTitle}> Customer Information </Text>

        <View style={styles.formCard}>

          <Text style={styles.label}> Full Name </Text>
          <TextInput
            placeholder="Enter your name"
            value={customerName}
            onChangeText={setCustomerName}
            style={styles.input}
          />

          <Text style={styles.label}> Addres </Text>
          <TextInput
            placeholder="Enter your address"
            value={address}
            onChangeText={setAddress}
            style={styles.input}
          />

          <Text style={styles.note}>
            Please provide your correct information
            for your order.
          </Text>

          <Button
            title="Place Order"
            color="#123B70"
            onPress={() => {
              router.push({
                pathname: '/success',
                params: {
                  name: customerName,
                },
              });
            }}
          />

        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },

  header: {
    backgroundColor: '#123B70',
    paddingTop: 50,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },

  headerTitle: {
    color: '#F9C900',
    fontSize: 27,
    fontWeight: '900',
  },

  headerSubtitle: {
    color: '#FFFFFF',
    marginTop: 5,
  },

  content: {
    padding: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#111111',
    marginBottom: 12,
    marginTop: 5,
  },

  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 25,
    elevation: 2,
  },

  foodName: {
    fontSize: 21,
    fontWeight: '900',
    color: '#111111',
  },

  orderInfo: {
    color: '#666666',
    marginTop: 8,
  },

  divider: {
    height: 1,
    backgroundColor: '#D9DDE3',
    marginVertical: 15,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: '700',
  },

  total: {
    fontSize: 23,
    fontWeight: '900',
    color: '#123B70',
  },

  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111111',
    marginBottom: 7,
  },

  input: {
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#D9DDE3',
    borderRadius: 10,
    padding: 13,
    marginBottom: 18,
  },

  note: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 18,
    lineHeight: 18,
  },
});