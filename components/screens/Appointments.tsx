import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { globalStyles } from "../../styles/global";
import { useNavigation } from "@react-navigation/native";

const Appointments: React.FC = () => {
  const navigation = useNavigation();

  const upcomingAppointments = [
    {
      id: "1",
      therapist: "Dr. Sarah Migada",
      date: "2024-07-01",
      time: "10:00 AM",
    },
    {
      id: "2",
      therapist: "Dr. Sarah Migada",
      date: "2024-07-03",
      time: "2:00 PM",
    },
    // Add more appointments as needed
  ];

  const completedSessions = [
    {
      id: "1",
      therapist: "Dr. Sarah Migada",
      date: "2024-06-25",
      time: "11:00 AM",
    },
    {
      id: "2",
      therapist: "Dr. Sarah Migada",
      date: "2024-06-20",
      time: "9:00 AM",
    },
    // Add more completed sessions as needed
  ];

  const renderAppointmentItem = ({
    item,
  }: {
    item: { id: string; therapist: string; date: string; time: string };
  }) => (
    <View style={styles.appointmentItem}>
      <Text style={styles.therapistName}>{item.therapist}</Text>
      <Text
        style={styles.appointmentDetails}
      >{`${item.date} at ${item.time}`}</Text>
    </View>
  );

  return (
    <View style={[globalStyles.Primary, styles.container]}>
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => navigation.navigate("Therapists")}
      >
        <Text style={styles.bookButtonText}>Book Session</Text>
      </TouchableOpacity>

      <Text style={styles.sectionHeader}>Upcoming Appointments</Text>
      <FlatList
        data={upcomingAppointments}
        renderItem={renderAppointmentItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />

      <Text style={styles.sectionHeader}>Completed Sessions</Text>
      <FlatList
        data={completedSessions}
        renderItem={renderAppointmentItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
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
  bookButton: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#00707a",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 15,
  },
  list: {
    width: "100%",
  },
  appointmentItem: {
    backgroundColor: "#dff2ff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  therapistName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  appointmentDetails: {
    fontSize: 16,
    color: "#888",
  },
});

export default Appointments;
