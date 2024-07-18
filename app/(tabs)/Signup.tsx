import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { registerUser } from './axiosConfig';
import { Picker } from '@react-native-picker/picker';

const Signup = () => {
  const navigation = useNavigation();

  const [userType, setUserType] = useState('Client');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      const userData = {
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        password: password,
        usertype: userType, // Add userType to the data sent to the API
      };
      const response = await registerUser(userData);
      console.log('Registration Successful:', response);
      // Navigate to the next screen or show a success message
    } catch (error) {
      console.error('Registration Failed:', error);
      alert('Registration Failed: ' + error.message); // Show error message to user
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={userType}
            onValueChange={(itemValue, itemIndex) => setUserType(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Client" value="Client" />
            <Picker.Item label="Therapist" value="Therapist" />
          </Picker>
        </View>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          autoComplete="name"
          autoCapitalize="words"
          returnKeyType="next"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          autoComplete="name"
          autoCapitalize="words"
          returnKeyType="next"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoComplete="username"
          autoCapitalize="none"
          returnKeyType="next"
          value={username}
          onChangeText={setUsername}
        />
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
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
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
          <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.eyeIcon}>
            <Ionicons
              name={showConfirmPassword ? 'eye-outline' : 'eye-off-outline'}
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
  pickerContainer: {
    width: '100%',
    marginBottom: 15,
    borderColor: '#dff2ff',
    borderWidth: 2,
    borderRadius: 10,
  },
  picker: {
    width: '100%',
    height: 50,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff', // Primary color
    paddingVertical: 10,
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

