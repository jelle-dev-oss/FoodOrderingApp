import { router, useLocalSearchParams } from 'expo-router';
import { Button, StyleSheet, Text, View, } from 'react-native';

export default function Cart() {

    const { name, price, quantity } = useLocalSearchParams();
    const total =
        Number(price || 0) * Number(quantity || 0);


    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}> My Cart </Text>
            </View>

            <View style={styles.content}>
                {name ? (
                    <View style={styles.card}>

                        <View style={styles.yellowLine} />
                        <Text style={styles.foodName}> {name} </Text>

                        <Text style={styles.info}> Price: ₱{price} </Text>

                        <Text style={styles.info}> Quantity: {quantity} </Text>

                        <View style={styles.divider} />

                        <Text style={styles.totalLabel}> Order Total </Text>

                        <Text style={styles.total}> ₱{total} </Text>

                        <Button
                            title="Proceed to Checkout"
                            color="#123B70"
                            onPress={() => {
                                router.push({
                                    pathname: '/checkout',
                                    params: {
                                        name: name,
                                        quantity: quantity,
                                        total: String(total),
                                    },
                                });
                            }}
                        />

                    </View>
                ) : (
                    <View style={styles.emptyContainer}>

                        <Text style={styles.emptyIcon}>

                        </Text>

                        <Text style={styles.emptyTitle}>
                            Your cart is empty
                        </Text>

                        <Text style={styles.emptyText}>
                            Select a food item from the menu
                            to start your order.
                        </Text>

                        <Button
                            title="Back to Menu"
                            color="#123B70"
                            onPress={() => router.push('/')}
                        />

                    </View>
                )}

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

    yellowLine: {
        height: 5,
        backgroundColor: '#F9C900',
        borderRadius: 5,
        marginBottom: 18,
    },

    foodName: {
        fontSize: 24,
        fontWeight: '900',
        color: '#111111',
        marginBottom: 15,
    },

    info: {
        fontSize: 16,
        color: '#666666',
        marginBottom: 8,
    },

    divider: {
        height: 1,
        backgroundColor: '#D9DDE3',
        marginVertical: 18,
    },

    totalLabel: {
        fontSize: 15,
        color: '#666666',
    },

    total: {
        fontSize: 28,
        fontWeight: '900',
        color: '#123B70',
        marginBottom: 20,
    },

    emptyContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        padding: 30,
        alignItems: 'center',
    },

    emptyIcon: {
        fontSize: 50,
        marginBottom: 15,
    },

    emptyTitle: {
        fontSize: 22,
        fontWeight: '900',
        color: '#111111',
    },

    emptyText: {
        textAlign: 'center',
        color: '#666666',
        marginTop: 8,
        marginBottom: 20,
        lineHeight: 21,
    },
});