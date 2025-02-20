import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleResetPassword = () => {
    if (!email) {
      setModalMessage("Please enter your email.");
      setModalVisible(true);
      return;
    }
    setModalMessage("Password reset link sent to your email!");
    setModalVisible(true);
    setTimeout(() => {
      navigation.goBack();
    }, 3000);
  };

  return (
    <LinearGradient colors={["#e6ccff", "#ffffff", "#ffcccb"]} style={styles.container}>
      <Text style={styles.header}>Forgot Password</Text>
      <View style={styles.formBox}>
        <Text style={styles.title}>Enter your email to reset password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backToLogin}>
          <Text style={styles.backToLoginText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    fontFamily: 'serif',
  },
  formBox: {
    width: "95%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: 'black',
    shadowRadius: 22,
    elevation: 50,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 45,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 30,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "purple",
    padding: 12,
    borderRadius: 40,
    alignItems: "center",
    marginBottom: 18,
    width: '65%',
    alignSelf: 'center',
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  backToLogin: {
    alignItems: "center",
  },
  backToLoginText: {
    color: "blue",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 5,
    width: '60%',
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ForgotPassword;
