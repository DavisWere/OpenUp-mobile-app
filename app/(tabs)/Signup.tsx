import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Signup = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        {/* Your SignUp form content */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo.jpg')}
            style={{ width: 100, height: 100, marginBottom: 20 }}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          autoCompleteType="name"
          autoCapitalize="words"
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCompleteType="username"
          autoCapitalize="none"
          returnKeyType="next"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          autoCapitalize="none"
          returnKeyType="next"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry={!showPassword}
            autoCompleteType="password"
            autoCapitalize="none"
            returnKeyType="next"
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={24}
              color="#000" // Change color as needed
            />
          </TouchableOpacity>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirm Password"
            secureTextEntry={!showConfirmPassword}
            autoCompleteType="password"
            autoCapitalize="none"
            returnKeyType="go"
          />
          <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.eyeIcon}>
            <Ionicons
              name={showConfirmPassword ? 'eye-outline' : 'eye-off-outline'}
              size={24}
              color="#000" // Change color as needed
            />
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox}>
            <View style={{borderColor: '#333', borderWidth: 1, width: 12, height: 12, marginRight: 10}}></View>
            <Text style={styles.checkboxText}>Agree to <Text style={{color: 'blue', textDecorationColor: 'blue', textDecorationLine: 'underline', }}>Terms and Conditions</Text></Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signUpButton}>
          {/* Your SignUp button component */}
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          {/* Your login navigation */}
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
    padding: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff', // Primary color
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius: 10,
    fontSize: 18,
    borderColor: '#dff2ff',
    borderWidth: 2
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // Primary color
    borderRadius: 10,
    marginBottom: 15,
    borderColor: '#dff2ff',
    borderWidth: 2
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    fontSize: 16,
    
  },
  signUpButton: {
    backgroundColor: '#f9c70c', // Accent color
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 15,
  },
  signUpButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Primary color
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
  },
  loginLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Accent color
    marginLeft: 5,
    textDecorationColor: '#333',
    textDecorationLine: 'underline'
  },
});

export default Signup;

