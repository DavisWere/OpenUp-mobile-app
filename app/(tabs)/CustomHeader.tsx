import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from '../../assets/images/logo.jpg';

const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      {/* <Text style={styles.headerTitle}>OpenUp</Text> */}
      <Image source={logo} style={{width: 50, height: 50 }}/>
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={25} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 5,
    backgroundColor: '#fff',
    // backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
