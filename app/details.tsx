import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, } from 'react-native';


export default function Details() {
  
  const { id, name, price } = useLocalSearchParams();
  const [quantity, setQuantity] = useState(1);
  const total = Number(price) * quantity;

  return (
    
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Food Details
        </Text>
      </View>

      {/* Food Information */}
      <View style={styles.content}>

        <View style={styles.card}>

          <Text style={styles.foodName}>
            {name ? name : 'No food selected'}
          </Text>

          <Text style={styles.price}>
            {price ? `₱${price}` : 'No price available'}
          </Text>

          <Text style={styles.description}>
            Enjoy this delicious meal from our campus
            canteen.
          </Text>

          {/* Quantity */}
          <Text style={styles.quantityTitle}>
            Quantity
          </Text>

          <View style={styles.quantityRow}>

            <View style={styles.counterButton}>
              <Button
                title="-"
                onPress={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
              />
            </View>

            <Text style={styles.quantity}>
              {quantity}
            </Text>

            <View style={styles.counterButton}>
              <Button
                title="+"
                onPress={() => {
                  setQuantity(quantity + 1);
                }}
              />
            </View>

          </View>

          {/* Total */}
          <Text style={styles.total}>
            Total: ₱{total}
          </Text>

          <Button
            title="Add to Cart"
            color="#123B70"
            onPress={() => {
              router.push({
                pathname: '/cart',
                params: {
                  id: id,
                  name: name,
                  price: price,
                  quantity: String(quantity),
                },
              });
            }}
          />

        </View>

      </View>

    </View>
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
    fontSize: 26,
    fontWeight: '900',
  },

  content: {
    padding: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 22,
    elevation: 3,
  },

  foodName: {
    fontSize: 27,
    fontWeight: '900',
    color: '#111111',
  },

  price: {
    fontSize: 22,
    fontWeight: '900',
    color: '#123B70',
    marginTop: 8,
  },

  description: {
    fontSize: 15,
    color: '#666666',
    lineHeight: 22,
    marginTop: 12,
  },

  quantityTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111111',
    marginTop: 25,
  },

  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

  counterButton: {
    width: 45,
  },

  quantity: {
    fontSize: 24,
    fontWeight: '900',
    color: '#123B70',
    marginHorizontal: 20,
  },

  total: {
    fontSize: 23,
    fontWeight: '900',
    color: '#111111',
    marginTop: 25,
    marginBottom: 20,
  },
});