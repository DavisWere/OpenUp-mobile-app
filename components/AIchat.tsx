import React = require("react");
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AIchat = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Luna</Text>
      </View>
      <ScrollView style={styles.chatArea}>
        {/* This section will contain the chat messages */}
        <Text style={styles.chatMessage}>
          Luna: Hello! How can I assist you today?
        </Text>
        <Text style={styles.chatMessageUser}>
          User: I need help with my project.
        </Text>
      </ScrollView>
      <View style={styles.inputArea}>
        <TouchableOpacity style={styles.micButton}>
          <Ionicons name="mic-outline" size={24} color="black" />
        </TouchableOpacity>
        <TextInput style={styles.inputBox} placeholder="Type a message..." />
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dff2ff",
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: "#00707a",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  chatArea: {
    flex: 1,
    padding: 10,
  },
  chatMessage: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  chatMessageUser: {
    backgroundColor: "#dff2ff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: "flex-end",
  },
  inputArea: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  micButton: {
    marginRight: 10,
  },
  inputBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 40,
  },
  sendButton: {
    backgroundColor: "#00707a",
    padding: 10,
    borderRadius: 25,
    marginLeft: 10,
  },
});

export default AIchat;
