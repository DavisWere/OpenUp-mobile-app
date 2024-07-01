import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Profilepic from '../assets/images/cover.jpg';

const messages = [
  {
    id: '1',
    senderName: 'John Doe',
    message: 'Hello, how are you doing?',
    date: '2024-07-01',
    time: '12:00 PM',
    profilePicture: Profilepic,
  },
  {
    id: '2',
    senderName: 'Jane Smith',
    message: 'Okay',
    date: '2023-06-29',
    time: '8:48 AM',
    profilePicture: Profilepic,
  },
  // Add more messages here
];

const Messages = () => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate('MessageInterface', { senderName: item.senderName });
  };

  return (
    <>
    <View><Text style={styles.headerText}>Messages</Text></View>
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item)}>
          <View style={styles.messageContainer}>
            <Image source={ item.profilePicture } style={styles.profilePicture} />
            <View style={styles.textContainer}>
              <Text style={styles.senderName}>{item.senderName}</Text>
              <Text style={styles.message} numberOfLines={1} ellipsizeMode="tail">
                {item.message}
              </Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
    </>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 20, 
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 5,
    marginTop: 15
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  senderName: {
    fontWeight: 'bold',
    color: '#000',
  },
  message: {
    color: '#333',
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  date: {
    color: '#333',
  },
  time: {
    color: '#666',
  },
});

export default Messages;
