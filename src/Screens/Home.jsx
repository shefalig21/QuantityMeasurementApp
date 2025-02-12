import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const [imageStyle, setImageStyle] = useState(styles.image);

    const handlePressIn = () => {
        setImageStyle([styles.image, styles.imagePressed]);
    };

    const handlePressOut = () => {
        setImageStyle(styles.image);
    };

    return (
        <LinearGradient colors={['#ffcccb', '#ffffff', '#e6ccff']} style={styles.outerContainer}>
            <Text style={styles.title}>Choose Unit</Text>
            <View style={styles.main}>
       
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate("Length")}
                >
                    <Text style={styles.buttonText}>Length</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate("Temperature")}
                >
                    <Text style={styles.buttonText}>Temperature</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate("Mass")}
                >
                    <Text style={styles.buttonText}>Weight</Text>
                </TouchableOpacity>
            </View>
        
            <TouchableOpacity 
                onPressIn={handlePressIn} 
                onPressOut={handlePressOut}
                style={styles.imageWrapper}
            >
                <Image 
                    source={require('../assets/images/hero.png')} 
                    style={imageStyle} 
                />
            </TouchableOpacity>
        </LinearGradient>
    );
};

export default Home;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        position: 'relative',
    },
    title: {
        fontSize: 50,
        textAlign: 'center',
        marginBottom: 70,
        fontFamily: 'serif',
        fontWeight: 'bold',
    },
    main: {
        padding: 10,
        alignItems: 'center',
        marginBottom: 120,
    },
    button: {
        backgroundColor: '#7B1FA2',
        margin: 12,
        padding: 15,
        borderRadius: 30,
        width: 220,
        alignItems: 'center',
        borderBlockColor: 'black',
        shadowRadius: 12,
        elevation: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    imageWrapper: {
        position: 'absolute',
        bottom: 2,
        right: 2,
    },
    image: {
        width: 220,
        height: 220,
        resizeMode: 'contain',
    },
    imagePressed: {
        width: 260,
        height: 260,
    },
});




