import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Toast from 'react-native-toast-message';

const Therapists: React.FC = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const therapistsData = [
    { id: '1', name: 'Dr. Sarah Migada', specialization: 'Psychologist', image: 'https://via.placeholder.com/100' },
    { id: '2', name: 'Dr. Sarah Achieng ', specialization: 'Counselor', image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Dr. sarah Migada', specialization: 'Therapist', image: 'https://via.placeholder.com/100' },
  ];

  const filteredTherapists = therapistsData.filter(therapist =>
    therapist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date: Date) => {
    setSelectedDate(date.toLocaleDateString());
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (time: Date) => {
    setSelectedTime(time.toLocaleTimeString());
    hideTimePicker();
  };

  const handleBookSession = () => {
    Alert.alert(
      'Confirm Booking',
      "You'll be charged $5 for booking this session. Do you want to proceed?",
      [
        { text: 'Cancel', onPress: () => console.log('Booking Cancelled'), style: 'cancel' },
        { text: 'Proceed', onPress: () => handleBookingConfirmed() },
      ]
    );
  };

  const handleBookingConfirmed = () => {
    Toast.show({
      type: 'success',
      text1: 'Session Booked',
      text2: 'Your session has been successfully booked!',
    });
  };

  const renderTherapistItem = ({ item }: { item: { id: string, name: string, specialization: string, image: string } }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.specialization}>{item.specialization}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Therapists"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredTherapists}
        renderItem={renderTherapistItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />

      <TouchableOpacity onPress={showDatePicker} style={styles.dateButton}>
        <Text style={styles.dateButtonText}>
          {selectedDate ? `Selected Date: ${selectedDate}` : 'Select Date'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={showTimePicker} style={styles.timeButton}>
        <Text style={styles.timeButtonText}>
          {selectedTime ? `Selected Time: ${selectedTime}` : 'Select Time'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleBookSession} style={styles.bookButtonBottom}>
        <Text style={styles.bookButtonText}>Book Session</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
  },
  list: {
    flexGrow: 1,
  },
  itemContainer: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  specialization: {
    fontSize: 14,
    color: '#888',
  },
  bookButtonBottom: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  dateButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  dateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  timeButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  timeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Therapists;
