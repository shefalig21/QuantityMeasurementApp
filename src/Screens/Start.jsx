import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Start = () => {
    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#ffcccb', '#ffffff', '#ffcccb']} style={styles.outerContainer}>

            <View style={styles.container}>
                {/* <Image source={require('../assets/images/main4.png')} style={styles.image} /> */}

                <Text style={styles.title}>Welcome to Login/SignUp</Text>

                <View style={styles.main}>
                    {/* Navigate to Login Screen */}
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    {/* Navigate to SignUp Screen */}
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => navigation.navigate("SignUp")}
                    >
                        <Text style={styles.buttonText}>SignUp</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomImageContainer}>
                    <Image source={require('../assets/images/main2.png')} style={styles.bottomImage} />
                </View>

            </View>

        </LinearGradient>
    );
}

export default Start;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding:40,
    },
    // image: {
    //     width: 450,
    //     height: 180,
    //     // marginBottom: 20,
    // },
    title: {
        fontSize: 30,
        paddingTop: 170,
        paddingBottom: 30,
        textAlign: 'center',
        fontFamily: 'serif',
        fontWeight: 'bold',
    },
    main: {
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#7B1FA2',
        margin: 12,
        padding: 15,
        borderRadius: 30,
        width: 220,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    bottomImageContainer: {
        marginTop: 'auto', 
        alignItems: 'center',
    },
    bottomImage: {
        width: 350, 
        height: 250,
        bottom: 0,
        left: 0,
    },
});
