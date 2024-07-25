import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Alert,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Toast from "react-native-toast-message";

import { LogBox } from 'react-native';
// import api from "@/app/(tabs)/api"
import api from "@/app/(tabs)/api";
import {API_BASE_URL} from "@/app/(tabs)/constants.js";
// import {fetchData} from "../../app/(tabs)/axiosConfig"

LogBox.ignoreAllLogs(); //was not able to identify the source of the defaultProps error so I disabled all logs for now

// fetchData('users').then((res)=>console.log(res));


const Therapists = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [therapistsData, setTherapistsData] = useState([]);

  useEffect(() => {
    async function fetchTherapists() {
      try {
        const response = await api.get(`${API_BASE_URL}user`);
        setTherapistsData(response?.data?.results || []);
      } catch (error) {
        console.error("Failed to fetch therapists:", error);
      }
    }

    fetchTherapists();
  }, []);

  const filteredTherapists = therapistsData.filter((therapist) =>
    therapist.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    therapist.last_name?.toLowerCase().includes(searchQuery.toLowerCase())
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
      "Confirm Booking",
      "You'll be charged $5 for booking this session. Do you want to proceed?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Booking Cancelled"),
          style: "cancel",
        },
        { text: "Proceed", onPress: () => handleBookingConfirmed() },
      ]
    );
  };

  const handleBookingConfirmed = () => {
    Toast.show({
      type: "success",
      text1: "Session Booked",
      text2: "Your session has been successfully booked!",
    });
  };

  const renderTherapistItem = ({
    item,
  }: {
    item: { id: string; first_name: string; last_name: string; specialization: string; avatar: string };
  }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.avatar }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={[styles.name, { color: "#333" }]}>{item.first_name} {item.last_name}</Text>
        <Text style={styles.specialization}>{item.specialization}</Text>
      </View>
      <TouchableOpacity onPress={handleBookSession} style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book Session</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Therapists</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Therapists"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredTherapists}
        renderItem={renderTherapistItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={showDatePicker}
            style={styles.selectDateButton}
          >
            <Text style={styles.selectDateButtonText}>Select Date</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={showTimePicker}
            style={styles.selectTimeButton}
          >
            <Text style={styles.selectTimeButtonText}>Select Time</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          {selectedDate && (
            <Text style={styles.selectedText}>Date: <Text style={{fontWeight: 'bold'}}>{selectedDate}</Text></Text>
          )}
          {selectedTime && (
            <Text style={styles.selectedText}>Time: <Text style={{fontWeight: 'bold'}}>{selectedTime}</Text></Text>
          )}
        </View>
      </View>
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
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: "#dff2ff",
  },
  list: {
    width: "100%",
  },
  itemContainer: {
    backgroundColor: "#dff2ff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
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
    fontWeight: "bold",
  },
  specialization: {
    fontSize: 16,
    color: "#555",
  },
  bookButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#00707a",
    borderRadius: 8,
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomContainer: {
    marginTop: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // marginHorizontal: '5%',
    marginBottom: 10,
  },
  selectDateButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#00707a",
    borderRadius: 8,
    alignItems: "center",
    width: '40%'
  },
  selectDateButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectTimeButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#00707a",
    borderRadius: 8,
    alignItems: "center",
    marginLeft: 10,
    width: '40%'
    
  },
  selectTimeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    
  },
  selectedText: {
    fontSize: 16,
    color: "#333",
    width: '40%',

  },
});

export default Therapists;


