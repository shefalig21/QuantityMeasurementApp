//final code of start.jsx with one image:

// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import React from 'react';
// import LinearGradient from 'react-native-linear-gradient';

// const Start= () => {
//     return (
//         <LinearGradient colors={['#ffcccb', '#ffffff', '#ffcccb']} style={styles.outerContainer}>

//             <View style={styles.container}>
//                 {/* <Image source={require('../assets/images/main4.png')} style={styles.image} /> */}

//                 <Text style={styles.title}>Welcome to Login/SignUp</Text>

//                 <View style={styles.main}>
//                     <TouchableOpacity style={styles.button} >
//                         <Text style={styles.buttonText}>Login</Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity style={styles.button}>
//                         <Text style={styles.buttonText}>SignUp</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={styles.bottomImageContainer}>
//                     <Image source={require('../assets/images/main2.png')} style={styles.bottomImage} />
//                 </View>

//             </View>

//         </LinearGradient>
//     );
// }

// export default Start

// const styles = StyleSheet.create({
//     outerContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         padding:40,
//     },
//     // image: {
//     //     width: 450,
//     //     height: 180,
//     //     // marginBottom: 20,
//     // },
//     title: {
//         fontSize: 30,
//         paddingTop: 170,
//         paddingBottom: 30,
//         textAlign: 'center',
//         fontFamily: 'serif',
//         fontWeight: 'bold',
//     },
//     main: {
//         padding: 10,
//         alignItems: 'center',
//         marginBottom: 10,
//     },
//     button: {
//         backgroundColor: '#7B1FA2',
//         margin: 12,
//         padding: 15,
//         borderRadius: 30,
//         width: 220,
//         alignItems: 'center',
//     },
//     buttonText: {
//         color: 'white',
//         fontWeight: 'bold',
//         fontSize: 20,
//     },
//     bottomImageContainer: {
//         marginTop: 'auto', 
//         alignItems: 'center',
//     },
//     bottomImage: {
//         width: 350, 
//         height: 250,
//         bottom: 0,
//         left: 0,
//     },
// });











//with two iamge:

// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import React from 'react';
// import LinearGradient from 'react-native-linear-gradient';

// const Try = () => {
//     return (
//         <LinearGradient colors={['#ffcccb', '#ffffff', '#ffcccb']} style={styles.outerContainer}>

//             <View style={styles.container}>
//                 {/* <Image source={require('../assets/images/main4.png')} style={styles.image} /> */}

//                 <Text style={styles.title}>Welcome to Login/SignUp</Text>

//                 <View style={styles.main}>
//                     <TouchableOpacity style={styles.button} >
//                         <Text style={styles.buttonText}>Login</Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity style={styles.button}>
//                         <Text style={styles.buttonText}>SignUp</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={styles.bottomImageContainer}>
//                     <Image source={require('../assets/images/main2.png')} style={styles.bottomImage} />
//                 </View>

//             </View>

//         </LinearGradient>
//     );
// }

// export default Try

// const styles = StyleSheet.create({
//     outerContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'flex-start',
//         alignItems: 'center',

//     },
//     // image: {
//     //     width: 450,
//     //     height: 180,
//     //     // marginBottom: 20,
//     // },
//     title: {
//         fontSize: 30,
//         padding: 30,
//         textAlign: 'center',
//         marginBottom: 15,
//         fontFamily: 'serif',
//         fontWeight: 'bold',
//     },
//     main: {
//         padding: 10,
//         alignItems: 'center',
//         marginBottom: 10,
//     },
//     button: {
//         backgroundColor: '#7B1FA2',
//         margin: 12,
//         padding: 15,
//         borderRadius: 30,
//         width: 220,
//         alignItems: 'center',
//     },
//     buttonText: {
//         color: 'white',
//         fontWeight: 'bold',
//         fontSize: 20,
//     },
//     bottomImageContainer: {
//         marginTop: 'auto', 
//         alignItems: 'center',
        
//     },
//     bottomImage: {
//         width: 350, 
//         height: 250,
//         bottom: 0,
//         left: 0,
//     },

// });






//Home.jsx:


// import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
// import React, { useState } from 'react';
// import LinearGradient from 'react-native-linear-gradient';

// const Try = () => {
//     const [imageStyle, setImageStyle] = useState(styles.image);

//     const handlePressIn = () => {
//         setImageStyle([styles.image, styles.imagePressed]);
//     };

//     const handlePressOut = () => {
//         setImageStyle(styles.image);
//     };

//     return (
//         <LinearGradient colors={['#ffcccb', '#ffffff', '#e6ccff']} style={styles.outerContainer}>
//             <Text style={styles.title}>Choose Unit</Text>
//             <View style={styles.main}>
//                 <TouchableOpacity style={styles.button}>
//                     <Text style={styles.buttonText}>Length</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.button}>
//                     <Text style={styles.buttonText}>Temperature</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.button}>
//                     <Text style={styles.buttonText}>Weight</Text>
//                 </TouchableOpacity>
//             </View>
            
//             <TouchableOpacity 
//                 onPressIn={handlePressIn} 
//                 onPressOut={handlePressOut}
//                 style={styles.imageWrapper}
//             >
//                 <Image 
//                     source={require('../assets/images/hero.png')} 
//                     style={imageStyle} 
//                 />
//             </TouchableOpacity>
//         </LinearGradient>
//     );
// };

// export default Try;

// const styles = StyleSheet.create({
//     outerContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 40,
//         position: 'relative',
//     },
//     title: {
//         fontSize: 50,
//         textAlign: 'center',
//         marginBottom: 70,
//         fontFamily: 'serif',
//         fontWeight: 'bold',
//     },
//     main: {
//         padding: 10,
//         alignItems: 'center',
//         marginBottom: 120,
//     },
//     button: {
//         backgroundColor: '#7B1FA2',
//         margin: 12,
//         padding: 15,
//         borderRadius: 30,
//         width: 220,
//         alignItems: 'center',
//         borderBlockColor: 'black',
//         shadowRadius: 12,
//         elevation: 10,
//     },
//     buttonText: {
//         color: 'white',
//         fontWeight: 'bold',
//         fontSize: 20,
//         // fontFamily: 'serif',
//     },
//     imageWrapper: {
//         position: 'absolute',
//         bottom: 2,
//         right: 2,
//     },
//     image: {
//         width: 220,
//         height: 220,
//         resizeMode: 'contain',
//     },
//     imagePressed: {
//         width: 260,
//         height: 260,
//     },
// });
