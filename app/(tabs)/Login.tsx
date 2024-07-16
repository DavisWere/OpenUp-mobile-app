// Login.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "./axiosConfig";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const Login = () => {
  const navigation = useNavigation();
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const loginData = {
        username: usernameOrEmail,
        password: password,
      };
      const response = await loginUser(loginData);
      console.log("Login Successful:", response);
      
      await AsyncStorage.setItem('token', response.access);
      
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/images/logo.jpg")}
              style={{ width: 100, height: 100, marginBottom: 20 }}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.label}>Username or Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username or email"
          autoComplete="username"
          autoCapitalize="none"
          returnKeyType="next"
          value={usernameOrEmail}
          onChangeText={setUsernameOrEmail}
        />
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            autoComplete="password"
            autoCapitalize="none"
            returnKeyType="go"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => alert("To be implemented")}>
          <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius: 10,
    fontSize: 18,
    borderColor: "#dff2ff",
    borderWidth: 2,
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    borderColor: "#dff2ff",
    borderWidth: 2,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 18,
  },
  eyeIcon: {
    padding: 15,
  },
  signInButton: {
    backgroundColor: "#f9c70c",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginVertical: 25,
  },
  signInButtonText: {
    fontSize: 18,
    color: '#fff',
    textShadowColor: '#666',
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowRadius: 2,
    fontWeight: 'bold'
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  signUpText: {
    fontSize: 16,
    marginRight: 5,
  },
  signUpLink: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textDecorationColor: "#333",
    textDecorationLine: "underline",
  },
  forgotPasswordLink: {
    marginTop: 10,
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default Login;
