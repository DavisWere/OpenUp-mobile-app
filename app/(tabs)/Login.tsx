import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    // Navigate to Forgot Password screen
    // Replace with your navigation logic
    alert('To be implemented');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        {/* Your Login form content */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo.jpg')}
            style={{ width: 100, height: 100, marginBottom: 20 }}
          />
        </View>
        <Text style={styles.label}>Username or Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username or email"
          autoCompleteType="username"
          autoCapitalize="none"
          returnKeyType="next"
        />
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            autoCompleteType="password"
            autoCapitalize="none"
            returnKeyType="go"
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={24}
              color="#000" // Change color as needed
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signInButton}>
          {/* Your SignIn button component */}
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          {/* Your signup navigation */}
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleForgotPassword}>
          {/* Forgot Password link */}
          <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
        </TouchableOpacity>
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
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius: 10,
    fontSize: 18,
    borderColor: '#dff2ff',
    borderWidth: 2,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    borderColor: '#dff2ff',
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
    backgroundColor: '#f9c70c',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 15,
  },
  signInButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  signUpText: {
    fontSize: 16,
    marginRight: 5,
  },
  signUpLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textDecorationColor: '#333',
    textDecorationLine: 'underline',
  },
  forgotPasswordLink: {
    marginTop: 10,
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Login;
