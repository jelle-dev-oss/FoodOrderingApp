import { router, useLocalSearchParams } from 'expo-router';
import {
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Success() {
    const { name } = useLocalSearchParams();

    return (
        <View style={styles.container}>

            <View style={styles.card}>

                <View style={styles.checkCircle}>
                    <Text style={styles.check}>
                        ✓
                    </Text>
                </View>

                <Text style={styles.title}>
                    Order Successful!
                </Text>

                <Text style={styles.greeting}>
                    Thank you, {name || 'Customer'}!
                </Text>

                <Text style={styles.message}>
                    Your QuickBite order has been placed
                    successfully.
                </Text>

                <View style={styles.line} />

                <Text style={styles.reminder}>
                    Please proceed to the campus canteen
                    when your order is ready.
                </Text>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Back to Home"
                        color="#123B70"
                        onPress={() => {
                            router.push('/');
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
        backgroundColor: '#123B70',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 22,
        padding: 30,
        width: '100%',
        alignItems: 'center',
        elevation: 5,
    },

    checkCircle: {
        width: 75,
        height: 75,
        borderRadius: 40,
        backgroundColor: '#F9C900',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },

    check: {
        fontSize: 45,
        fontWeight: '900',
        color: '#123B70',
    },

    title: {
        fontSize: 27,
        fontWeight: '900',
        color: '#123B70',
        textAlign: 'center',
    },

    greeting: {
        fontSize: 18,
        fontWeight: '700',
        color: '#111111',
        marginTop: 12,
    },

    message: {
        fontSize: 15,
        color: '#666666',
        textAlign: 'center',
        marginTop: 10,
        lineHeight: 21,
    },

    line: {
        height: 1,
        width: '100%',
        backgroundColor: '#D9DDE3',
        marginVertical: 20,
    },

    reminder: {
        fontSize: 14,
        color: '#666666',
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 20,
    },

    buttonContainer: {
        width: '100%',
    },
});