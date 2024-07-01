import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Switch, TouchableOpacity, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Profilepic from '../assets/images/cover.jpg';

const Profile = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isUSSDModalVisible, setIsUSSDModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);
  const toggleUSSDModal = () => setIsUSSDModalVisible(!isUSSDModalVisible);

  const closeModal = () => setIsUSSDModalVisible(false);


  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };

  // Will handle logout
  // const navigateToWelcomeScreen = () => {
  //   navigation.navigate('WelcomeScreen');
  // };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <View style={styles.profileHeader}>
        <Image source={Profilepic} style={styles.profilePicture} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>John Doe</Text>
          <Text style={styles.email}>john.doe@example.com</Text>
          <Text style={styles.phoneNumber}>+123 456 7890</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Accessibility</Text>
        <View style={styles.item}>
          <Text style={styles.itemText}>Select Language</Text>
          <Picker
            selectedValue={selectedLanguage}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
          >
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Spanish" value="es" />
            <Picker.Item label="French" value="fr" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.item} onPress={() => console.log('Open Accessibility Menu')}>
          <Text style={styles.itemText}>Accessibility Menu</Text>
          <Ionicons name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.item}>
          <Text style={styles.itemText}>Theme</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleDarkMode}
            value={isDarkMode}
          />
        </View>
        <TouchableOpacity style={styles.item} onPress={toggleUSSDModal}>
          <Text style={styles.itemText}>USSD</Text>
          <Ionicons name="information-circle-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.item} onPress={navigateToSettings}>
          <Ionicons name="settings-outline" size={24} color="#000" />
          <Text style={styles.itemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Ionicons name="log-out-outline" size={24} color="#000" />
          <Text style={styles.itemText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={isUSSDModalVisible} onBackdropPress={closeModal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>USSD Information</Text>
          <Text style={styles.modalText}>The USSD code for this app is *123#. Use this code for quick access to the app's features.</Text>
          <TouchableOpacity onPress={closeModal}>
            <Text style={styles.closeModal}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  userInfo: {
    justifyContent: 'center',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  email: {
    fontSize: 16,
    color: '#333',
  },
  phoneNumber: {
    fontSize: 16,
    color: '#333',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
  picker: {
    height: 50,
    width: 150,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
  },
  closeModal: {
    fontSize: 16,
    color: '#f9c70c',
  },
})

export default Profile


