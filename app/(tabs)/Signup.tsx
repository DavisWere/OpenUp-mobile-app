import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image, ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { registerUser } from "./axiosConfig";
import { Picker } from "@react-native-picker/picker";

const Signup = () => {
  const navigation = useNavigation();

  const [userType, setUserType] = useState("Client");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [therapyLicense, setTherapyLicense] = useState("");
  const [specialization, setSpecialization] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      const userData = {
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        password: password,
        user_type: userType,
        therapy_license: userType === "therapist" ? therapyLicense : undefined,
        specialization: userType === "therapist" ? specialization : undefined,
      };
      const response = await registerUser(userData);
      alert("Registration successful! Proceed to login");
      setTimeout(() => {
        navigation.navigate("Login");
      }, 300);
    } catch (error) {
      console.error("Registration Failed:", error);
      alert("Registration Failed: " + error.message);
    }
  };

  return (
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.formContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
              <View style={styles.logoContainer}>
                <Image
                    source={require("../../assets/images/logo.jpg")}
                    style={{ width: 100, height: 100, marginBottom: 20 }}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.pickerContainer}>
              <Picker
                  selectedValue={userType}
                  onValueChange={(itemValue) => setUserType(itemValue)}
                  style={styles.picker}
              >
                <Picker.Item label="Client" value="client" />
                <Picker.Item label="Therapist" value="therapist" />
              </Picker>
            </View>
            <Text style={styles.label}>First Name</Text>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                autoComplete="name"
                autoCapitalize="words"
                returnKeyType="next"
                value={firstName}
                onChangeText={setFirstName}
            />
            <Text style={styles.label}>Last Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                autoComplete="name"
                autoCapitalize="words"
                returnKeyType="next"
                value={lastName}
                onChangeText={setLastName}
            />
            <Text style={styles.label}>Username</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                autoComplete="username"
                autoCapitalize="none"
                returnKeyType="next"
                value={username}
                onChangeText={setUsername}
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoComplete="email"
                autoCapitalize="none"
                returnKeyType="next"
                value={email}
                onChangeText={setEmail}
            />
            {userType === "therapist" && (
                <>
                  <Text style={styles.label}>Therapist License</Text>
                  <TextInput
                      style={styles.input}
                      placeholder="Therapy License"
                      autoCapitalize="none"
                      returnKeyType="next"
                      value={therapyLicense}
                      onChangeText={setTherapyLicense}
                  />
                  <Text style={styles.label}>Specialization</Text>
                  <TextInput
                      style={styles.input}
                      placeholder="Specialization"
                      autoCapitalize="words"
                      returnKeyType="next"
                      value={specialization}
                      onChangeText={setSpecialization}
                  />
                </>
            )}
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                  style={styles.passwordInput}
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  autoComplete="password"
                  autoCapitalize="none"
                  returnKeyType="next"
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
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                  style={styles.passwordInput}
                  placeholder="Confirm Password"
                  secureTextEntry={!showConfirmPassword}
                  autoComplete="password"
                  autoCapitalize="none"
                  returnKeyType="go"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
              />
              <TouchableOpacity
                  onPress={toggleConfirmPasswordVisibility}
                  style={styles.eyeIcon}
              >
                <Ionicons
                    name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                    size={24}
                    color="#000"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.signUpButton} onPress={handleSignup}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginLink}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

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
    paddingHorizontal: 30,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 20,
  },
  pickerContainer: {
    width: "100%",
    marginBottom: 15,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
  picker: {
    width: "100%",
    height: 50,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 7,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 16,
    borderColor: "lightgray",
    borderWidth: 1,
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 15,
    borderColor: "lightgray",
    borderWidth: 1,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 7,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 15,
  },
  signUpButton: {
    backgroundColor: "#00707a",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 15,
  },
  signUpButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginText: {
    fontSize: 16,
  },
  loginLink: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 5,
    textDecorationColor: "#333",
    textDecorationLine: "underline",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 7,
    color: "#444",
    alignSelf: "flex-start",
    fontSize: 18,

  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingHorizontal: 30,
  },
});

export default Signup;
