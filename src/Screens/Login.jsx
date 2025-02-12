import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { login } from '../Services/AuthService';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin =async() => {
        if (!email || !password) {
            Alert.alert("Error", "Please enter both email and password.");
            return;
        }
    
        const result=await login(email,password);

        if(result.success)
        {
            Alert.alert("Success","Login successful!");
            navigation.replace("Home");

        }
        else{
            Alert.alert("Login Failed",result.error);
        }
    };

    return (
        <LinearGradient colors={['#ffcccb', '#ffffff','#e6ccff']} style={styles.outerContainer}>
            <Text style={styles.header}>Login</Text>
            <View style={styles.formBox}>
                <Text style={styles.welcomeText}>Welcome back</Text>
                <Text style={styles.title}>Login to your Account</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder="Enter Your Password"
                    style={styles.input}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    value={password}
                />

    
                <TouchableOpacity 
                onPress={() => navigation.navigate("ForgotPassword")} 
                    style={styles.forgotPasswordContainer}
                >
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleLogin} >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>Don't have an account?</Text>

                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text style={styles.signUpText1}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}

export default Login;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    header: {
        fontSize: 50,
        textAlign: 'center',
        marginBottom: 30,
        fontFamily: 'serif',
        fontWeight: 'bold',
    },
    welcomeText: {
        fontSize: 33,
        textAlign: 'center',
        fontFamily: 'serif',
        fontWeight: 'bold',
        marginTop: 30,
    },
    title: {
        fontSize: 20,
        marginTop: 6,
        marginBottom: 35,
        textAlign: 'center',
        fontFamily: 'serif',
    },
    input: {
        width: '100%',
        height: 45,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9',
    },
    formBox: {
        width: '100%',
        padding: 30,
        backgroundColor: '#fff',
        // borderRadius: 15,
        borderWidth: 2,
        // borderColor: '#ccc',
        borderColor:'#ccc',
        // shadowColor: '#000',
        shadowColor: 'purple',
        // elevation:3,
        borderTopLeftRadius:80,
        borderBottomRightRadius:80,
        
    },
    forgotPasswordContainer: {
        alignSelf: 'flex-end',
        marginTop: 3,
        marginBottom: 5,
    },
    forgotPasswordText: {
        color: 'blue',
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: 'purple',
        padding: 15,
        borderRadius: 40,
        alignItems: 'center',
        width: '55%',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signUpContainer: {
        alignItems: 'center',
        marginTop: 27,
    },
    signUpText: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'serif',
        fontWeight: '900',
        textAlign: 'center',
    },
    signUpText1: {
        fontSize: 18,
        color: 'blue',
        fontFamily: 'serif',
        fontWeight: '900',
        textAlign: 'center',
        marginBottom: 30,
    },
});

































//Before Authetication:


// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
// import React, { useState } from 'react';
// import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/native';

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigation = useNavigation();

//     const handleLogin = () => {
//         if (!email || !password) {
//             Alert.alert("Error", "Please enter both email and password.");
//             return;
//         }
//         Alert.alert("Success", "Login successful!");
//         navigation.replace("Home");
//     };

//     return (
//         <LinearGradient colors={['#ffcccb', '#ffffff','#e6ccff']} style={styles.outerContainer}>
//             <Text style={styles.header}>Login</Text>
//             <View style={styles.formBox}>
//                 <Text style={styles.welcomeText}>Welcome back</Text>
//                 <Text style={styles.title}>Login to your Account</Text>

//                 <TextInput
//                     style={styles.input}
//                     placeholder="Enter your email"
//                     onChangeText={setEmail}
//                     value={email}
//                     keyboardType="email-address"
//                     autoCapitalize="none"
//                 />
//                 <TextInput
//                     placeholder="Enter Your Password"
//                     style={styles.input}
//                     onChangeText={setPassword}
//                     secureTextEntry={true}
//                     value={password}
//                 />

    
//                 <TouchableOpacity 
//                 onPress={() => navigation.navigate("ForgotPassword")} 
//                     style={styles.forgotPasswordContainer}
//                 >
//                     <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//                 </TouchableOpacity>

//                 <View style={styles.buttonContainer}>
//                     <TouchableOpacity style={styles.button} onPress={handleLogin} >
//                         <Text style={styles.buttonText}>Login</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={styles.signUpContainer}>
//                     <Text style={styles.signUpText}>Don't have an account?</Text>

//                     <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
//                         <Text style={styles.signUpText1}>Sign Up</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </LinearGradient>
//     );
// }

// export default Login;

// const styles = StyleSheet.create({
//     outerContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 40,
//     },
//     header: {
//         fontSize: 50,
//         textAlign: 'center',
//         marginBottom: 30,
//         fontFamily: 'serif',
//         fontWeight: 'bold',
//     },
//     welcomeText: {
//         fontSize: 33,
//         textAlign: 'center',
//         fontFamily: 'serif',
//         fontWeight: 'bold',
//         marginTop: 30,
//     },
//     title: {
//         fontSize: 20,
//         marginTop: 6,
//         marginBottom: 35,
//         textAlign: 'center',
//         fontFamily: 'serif',
//     },
//     input: {
//         width: '100%',
//         height: 45,
//         borderColor: 'grey',
//         borderWidth: 1,
//         borderRadius: 5,
//         marginBottom: 20,
//         paddingHorizontal: 10,
//         backgroundColor: '#f9f9f9',
//     },
//     formBox: {
//         width: '100%',
//         padding: 30,
//         backgroundColor: '#fff',
//         // borderRadius: 15,
//         borderWidth: 2,
//         // borderColor: '#ccc',
//         borderColor:'#ccc',
//         // shadowColor: '#000',
//         shadowColor: 'purple',
//         // elevation:3,
//         borderTopLeftRadius:80,
//         borderBottomRightRadius:80,
        
//     },
//     forgotPasswordContainer: {
//         alignSelf: 'flex-end',
//         marginTop: 3,
//         marginBottom: 5,
//     },
//     forgotPasswordText: {
//         color: 'blue',
//         fontWeight: 'bold',
//         fontFamily: 'serif',
//     },
//     buttonContainer: {
//         alignItems: 'center',
//         marginTop: 20,
//     },
//     button: {
//         backgroundColor: 'purple',
//         padding: 15,
//         borderRadius: 40,
//         alignItems: 'center',
//         width: '55%',
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     signUpContainer: {
//         alignItems: 'center',
//         marginTop: 27,
//     },
//     signUpText: {
//         fontSize: 18,
//         color: 'black',
//         fontFamily: 'serif',
//         fontWeight: '900',
//         textAlign: 'center',
//     },
//     signUpText1: {
//         fontSize: 18,
//         color: 'blue',
//         fontFamily: 'serif',
//         fontWeight: '900',
//         textAlign: 'center',
//         marginBottom: 30,
//     },
// });






