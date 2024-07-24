import { useState } from "react";
import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const WelcomeScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const navigation = useNavigation();

  const handleGoogleLogin = () => {
    Linking.openURL("https://accounts.google.com/");
  };

  const handleFacebookLogin = () => {
    Linking.openURL("https://www.facebook.com");
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp"); // Navigate to SignUp screen
  };

  const handleLogin = () => {
    navigation.navigate("Login"); // Navigate to Login screen
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.jpg")}
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Welcome to OpenUp</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 17, fontWeight: 500 }}>Select Language:</Text>
        <View>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="English" value="English" />
            <Picker.Item label="Spanish" value="Spanish" />
            <Picker.Item label="French" value="French" />
            {/*More languages to be added*/}
          </Picker>
        </View>
      </View>
      <Text style={styles.taglineText}>Empowering minds: Healing Together</Text>
      <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
        <Ionicons
          name="logo-google"
          size={24}
          color="#4285F4"
          style={styles.icon}
        />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.socialButton}
        onPress={handleFacebookLogin}
      >
        <FontAwesome
          name="facebook-official"
          size={24}
          color="#4285F4"
          style={styles.icon}
        />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or</Text>
      <TouchableOpacity style={styles.emailButton} onPress={handleSignUp}>
        <Text style={styles.emailButtonText}>Sign up with email</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
    paddingBottom: 40,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#000",
  },
  picker: {
    height: 50,
    width: 150,
  },
  taglineText: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 40,
    fontWeight: "500",
    color: "#333",
    textShadowColor: "#dff2ff",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderColor: "#4285F4",
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: "80%",
  },
  icon: {
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 18,
    color: "#333",
  },
  orText: {
    fontSize: 18,
    marginVertical: 20,
    fontWeight: 'bold'
  },
  emailButton: {
    backgroundColor: "#00707a",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 15,
    // borderColor: '#333',
    // borderWidth: .5
  },
  emailButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  loginText: {
    fontSize: 18,
  },
  loginLink: {
    fontSize: 18,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default WelcomeScreen;
