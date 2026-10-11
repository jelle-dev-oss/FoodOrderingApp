import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#123B70',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: '900',
        },
        headerTitle: 'QuickBite',
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'QuickBite',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="details"
        options={{
          title: 'Food Details',
        }}
      />

      <Stack.Screen
        name="cart"
        options={{
          title: 'My Cart',
        }}
      />

      <Stack.Screen
        name="checkout"
        options={{
          title: 'Checkout',
        }}
      />

      <Stack.Screen
        name="success"
        options={{
          title: 'Order Complete',
        }}
      />
    </Stack>
  );
}