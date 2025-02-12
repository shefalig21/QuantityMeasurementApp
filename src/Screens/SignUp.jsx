import React, { useState } from "react";
import { View, StyleSheet, Alert, TextInput, TouchableOpacity, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { signUp } from '../Services/AuthService';

const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup =async() => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    const result=await signUp(email,password);

    if(result.success)
    {
      Alert.alert("Success","Account created successfully!");
      navigation.navigate("Login");

      //if account craeted successfuly then user will navigate to login screen

    }
    else{
      Alert.alert("Sign-Up Failed",result.error);
    }
  };

  return (
    <LinearGradient colors={['#ffcccb', '#ffffff','#e6ccff']} style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Register</Text>
        <View style={styles.formBox}>
          <Text style={styles.title}>Create an Account</Text>
          
          <TextInput
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            style={styles.input}
          />
          <TextInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
          />


          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            style={styles.input}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} 
            onPress={handleSignup} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>

            <TouchableOpacity 
            onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 12,
    alignItems: "center",
  },
  header: {
    fontSize: 50,
    textAlign: "center",
    marginBottom: 40,
    fontFamily: "serif",
    fontWeight: "bold",
  },
  formBox: {
    width: "90%",
    padding: 20,
    backgroundColor: "#fff",
    // borderRadius: 15,
    borderWidth: 2,
    borderColor: "#ccc",
    borderTopRightRadius:80,
    borderBottomLeftRadius:80,

  },
  title: {
    fontFamily: "serif",
    marginTop: 15,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    width: "90%", 
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
    alignSelf: "center", 

  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 22,
  },
  button: {
    backgroundColor: "purple",
    padding: 12,
    borderRadius: 40,
    alignItems: "center",
    width: "55%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom:35,
  },
  loginText: {
    fontSize: 16,
    color: "black",
    fontWeight:'bold',
    fontFamily: "serif",
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue", 
    fontFamily:'serif',
  },
});

export default SignUp;


























//Before Authetication:


// import React, { useState } from "react";
// import { View, StyleSheet, Alert, TextInput, TouchableOpacity, Text } from "react-native";
// import LinearGradient from 'react-native-linear-gradient';

// const SignUp = ({ navigation }) => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSignup = () => {
//     if (!firstName || !lastName || !email || !password || !confirmPassword) {
//       Alert.alert("Error", "All fields are required");
//       return;
//     }
//     if (password !== confirmPassword) {
//       Alert.alert("Error", "Passwords do not match");
//       return;
//     }
//     Alert.alert("Success", "Account created successfully!");
//     navigation.navigate("Login"); 
//   };

//   return (
//     <LinearGradient colors={['#ffcccb', '#ffffff','#e6ccff']} style={styles.outerContainer}>
//       <View style={styles.container}>
//         <Text style={styles.header}>Register</Text>
//         <View style={styles.formBox}>
//           <Text style={styles.title}>Create an Account</Text>
//           <TextInput
//             placeholder="First Name"
//             value={firstName}
//             onChangeText={setFirstName}
//             style={styles.input}
//           />
//           <TextInput
//             placeholder="Last Name"
//             value={lastName}
//             onChangeText={setLastName}
//             style={styles.input}
//           />
//           <TextInput
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//             style={styles.input}
//           />
//           <TextInput
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//             style={styles.input}
//           />
//           <TextInput
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChangeText={setConfirmPassword}
//             secureTextEntry
//             style={styles.input}
//           />
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity style={styles.button} 
//             onPress={handleSignup} activeOpacity={0.8}>
//               <Text style={styles.buttonText}>Sign Up</Text>
//             </TouchableOpacity>

//           </View>
//           <View style={styles.loginContainer}>
//             <Text style={styles.loginText}>Already have an account? </Text>

//             <TouchableOpacity 
//             onPress={() => navigation.navigate('Login')}>
//               <Text style={styles.loginButtonText}>Login</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   outerContainer: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 12,
//     alignItems: "center",
//   },
//   header: {
//     fontSize: 50,
//     textAlign: "center",
//     marginBottom: 40,
//     fontFamily: "serif",
//     fontWeight: "bold",
//   },
//   formBox: {
//     width: "90%",
//     padding: 20,
//     backgroundColor: "#fff",
//     // borderRadius: 15,
//     borderWidth: 2,
//     borderColor: "#ccc",
//     borderTopRightRadius:80,
//     borderBottomLeftRadius:80,

//   },
//   title: {
//     fontFamily: "serif",
//     marginTop: 15,
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 30,
//   },
//   input: {
//     width: "90%", 
//     height: 40,
//     borderColor: "grey",
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 16,
//     paddingHorizontal: 10,
//     backgroundColor: "#f9f9f9",
//     alignSelf: "center", 

//   },
//   buttonContainer: {
//     alignItems: "center",
//     marginTop: 22,
//   },
//   button: {
//     backgroundColor: "purple",
//     padding: 12,
//     borderRadius: 40,
//     alignItems: "center",
//     width: "55%",
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   loginContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 20,
//     marginBottom:35,
//   },
//   loginText: {
//     fontSize: 16,
//     color: "black",
//     fontWeight:'bold',
//     fontFamily: "serif",
//   },
//   loginButtonText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "blue", 
//     fontFamily:'serif',
//   },
// });

// export default SignUp;






