import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const MessageInterface = ({ route }) => {
  const { senderName } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://example.com/profile.jpg' }} style={styles.profilePicture} />
        <Text style={styles.senderName}>{senderName}</Text>
        <View style={styles.iconContainer}>
          <FontAwesome name="video-camera" size={24} color="#000" />
          <MaterialIcons name="call" size={24} color="#000" />
        </View>
      </View>
      <View style={styles.messagesContainer}>
        {/* Add messages here */}
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Type a message" placeholderTextColor="#666" />
        <TouchableOpacity>
          <FontAwesome name="send" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="microphone" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#dff2ff',
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  senderName: {
    flex: 1,
    fontWeight: 'bold',
    color: '#000',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
  },
});

export default MessageInterface;
