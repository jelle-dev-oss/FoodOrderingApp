import { router } from 'expo-router';
import { Button, ScrollView, StyleSheet, Text, View, } from 'react-native';


export default function Index() {
  
    return (
        <ScrollView style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.logo}> QUICKBITE </Text>

                <Text style={styles.subtitle}> Campus Canteen Pre-Order </Text>
            </View>

            <View style={styles.content}>

                <Text style={styles.welcome}> What would you like to eat? </Text>

                <Text style={styles.sectionTitle}> Today's Menu </Text>

                
                {/* Chicken Burger */}
                <View style={styles.card}>
                    <Text style={styles.foodEmoji}></Text>
                    <Text style={styles.foodName}> Chicken Burger </Text>
                    <Text style={styles.description}> Crispy chicken with fresh vegetables and sauce. </Text>
                    <Text style={styles.price}> ₱120 </Text>

                    <Button
                        title="View Details"
                        color="#123B70"
                        onPress={() => {
                        router.push({
                            pathname: '/details',
                            params: {
                            id: 'food-1',
                            name: 'Chicken Burger',
                            price: '120',
                            },
                        });
                        }}
                    />
                </View>

                {/* Chicken Meal */}
                <View style={styles.card}>
                    <Text style={styles.foodEmoji}></Text>
                    <Text style={styles.foodName}> Chicken Meal </Text>
                    <Text style={styles.description}> Fried chicken served with rice and gravy. </Text>
                    <Text style={styles.price}> ₱150</Text>

                    <Button
                        title="View Details"
                        color="#123B70"
                        onPress={() => {
                        router.push({
                            pathname: '/details',
                            params: {
                            id: 'food-2',
                            name: 'Chicken Meal',
                            price: '150',
                            },
                        });
                        }}
                    />
                </View>

                {/* Spaghetti */}
                <View style={styles.card}>
                    <Text style={styles.foodEmoji}></Text>
                    <Text style={styles.foodName}> Spaghetti </Text>
                    <Text style={styles.description}> Sweet-style spaghetti with cheese and meat sauce. </Text>
                    <Text style={styles.price}> ₱100 </Text>

                    <Button
                        title="View Details"
                        color="#123B70"
                        onPress={() => {
                        router.push({
                            pathname: '/details',
                            params: {
                            id: 'food-3',
                            name: 'Spaghetti',
                            price: '100',
                            },
                        });
                        }}
                    />
                </View>

                {/* Pepperoni Pizza */}
                <View style={styles.card}>
                    <Text style={styles.foodEmoji}></Text>
                    <Text style={styles.foodName}> Pepperoni Pizza </Text>
                    <Text style={styles.description}> Cheesy pizza topped with pepperoni slices. </Text>
                    <Text style={styles.price}> ₱180 </Text>

                    <Button
                        title="View Details"
                        color="#123B70"
                        onPress={() => {
                        router.push({
                            pathname: '/details',
                            params: {
                            id: 'food-4',
                            name: 'Pepperoni Pizza',
                            price: '180',
                            },
                        });
                        }}
                    />
                </View>

                {/* Cheese Hotdog */}
                <View style={styles.card}>
                    <Text style={styles.foodEmoji}></Text>
                    <Text style={styles.foodName}> Cheese Hotdog </Text>
                    <Text style={styles.description}> Grilled hotdog with cheese and special sauce. </Text>
                    <Text style={styles.price}> ₱90 </Text>

                    <Button
                        title="View Details"
                        color="#123B70"
                        onPress={() => {
                        router.push({
                            pathname: '/details',
                            params: {
                            id: 'food-5',
                            name: 'Cheese Hotdog',
                            price: '90',
                            },
                        });
                        }}
                    />
                </View>

                {/* French Fries */}
                <View style={styles.card}>
                    <Text style={styles.foodEmoji}></Text>
                    <Text style={styles.foodName}> French Fries </Text>
                    <Text style={styles.description}> Crispy golden fries with a little salt. </Text>
                    <Text style={styles.price}> ₱70 </Text>

                    <Button
                        title="View Details"
                        color="#123B70"
                        onPress={() => {
                        router.push({
                            pathname: '/details',
                            params: {
                            id: 'food-6',
                            name: 'French Fries',
                            price: '70',
                            },
                        });
                        }}
                    />
                </View>

                {/* Ham Sandwich */}
                <View style={styles.card}>
                    <Text style={styles.foodEmoji}></Text>
                    <Text style={styles.foodName}> Ham Sandwich </Text>
                    <Text style={styles.description}> Ham, cheese, and fresh vegetables in soft bread. </Text>
                    <Text style={styles.price}> ₱85 </Text>

                    <Button
                        title="View Details"
                        color="#123B70"
                        onPress={() => {
                        router.push({
                            pathname: '/details',
                            params: {
                            id: 'food-7',
                            name: 'Ham Sandwich',
                            price: '85',
                            },
                        });
                        }}
                    />
                </View>

                {/* Iced Tea */}
                <View style={styles.card}>
                    <Text style={styles.foodEmoji}></Text>
                    <Text style={styles.foodName}> Iced Tea </Text>
                    <Text style={styles.description}> Refreshing cold iced tea. </Text>
                    <Text style={styles.price}> ₱50 </Text>

                    <Button
                        title="View Details"
                        color="#123B70"
                        onPress={() => {
                        router.push({
                            pathname: '/details',
                            params: {
                            id: 'food-8',
                            name: 'Iced Tea',
                            price: '50',
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
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 25,
  },

  logo: {
    fontSize: 30,
    fontWeight: '900',
    color: '#F9C900',
  },

  subtitle: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 5,
  },

  content: {
    padding: 20,
  },

  welcome: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111111',
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: '900',
    color: '#123B70',
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    borderLeftWidth: 5,
    borderLeftColor: '#F9C900',
    elevation: 3,
  },

  foodEmoji: {
    fontSize: 45,
    marginBottom: 8,
  },

  foodName: {
    fontSize: 20,
    fontWeight: '900',
    color: '#111111',
  },

  description: {
    color: '#666666',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 5,
    marginBottom: 12,
  },

  price: {
    fontSize: 20,
    fontWeight: '900',
    color: '#123B70',
    marginBottom: 12,
  },
});