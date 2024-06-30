import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'; 
import { Picker } from '@react-native-picker/picker'; 
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const WelcomeScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const navigation = useNavigation();

  const handleGoogleLogin = () => {
    Linking.openURL('https://accounts.google.com/');
  };

  const handleFacebookLogin = () => {
    Linking.openURL('https://www.facebook.com');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp'); // Navigate to SignUp screen
  };

  const handleLogin = () => {
    navigation.navigate('Login'); // Navigate to Login screen
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('../../assets/images/logo.jpg')}
        style={{ width: 100, height: 100, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
        Welcome to OpenUp
      </Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        style={{ height: 50, width: 150 }}
      >
        <Picker.Item label="English" value="English" />
        <Picker.Item label="Spanish" value="Spanish" />
        <Picker.Item label="French" value="French" />
        {/* Add more languages as needed */}
      </Picker>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Empowering minds: Healing Together
      </Text>
      <TouchableOpacity onPress={handleGoogleLogin}>
        <Text style={{ fontSize: 18, color: 'blue' }}>
          Continue with Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleFacebookLogin}>
        <Text style={{ fontSize: 18, color: 'blue' }}>
          Continue with Facebook
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>or</Text>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={{ fontSize: 18, color: 'blue' }}>
          Sign up with email
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Already have an account?{' '}
        <TouchableOpacity onPress={handleLogin}>
          <Text style={{ fontSize: 18, color: 'blue' }}>Login</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default WelcomeScreen;

