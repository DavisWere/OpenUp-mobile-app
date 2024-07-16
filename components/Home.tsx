import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Games from "./subcomponents/Games";
import Quicktips from "./subcomponents/Quicktips";
import { Ionicons } from "@expo/vector-icons";
import Calendar from "../assets/images/calendar.png";
import CommunityForum from "../assets/images/community.png";
import Therapist from "../assets/images/brain.png";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.MainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Quicktips />
      <Games />
      <ScrollView style={{ marginVertical: 20 }}>
        <TouchableOpacity
          style={styles.screenChoice}
          onPress={() => navigateToScreen("Therapists")}
        >
          <Image source={Therapist} style={styles.Icons} />
          <View style={styles.screenText}>
            <Text style={styles.choiceText}>Therapists</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={25}
              color={"#f9c70c"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screenChoice}
          onPress={() => navigateToScreen("Appointments")}
        >
          <Image source={Calendar} style={styles.Icons} />
          <View style={styles.screenText}>
            <Text style={styles.choiceText}>Appointments</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={25}
              color={"#f9c70c"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.screenChoice}
          onPress={() => navigateToScreen("Community")}
        >
          <Image source={CommunityForum} style={styles.Icons} />
          <View style={styles.screenText}>
            <Text style={styles.choiceText}>Community</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={25}
              color={"#f9c70c"}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  Icons: {
    width: 50,
    height: 50,
  },
  screenChoice: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    justifyContent: "space-between",
    borderColor: "#dff2ff",
    borderWidth: 1,
    elevation: 3,
  },
  screenText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "65%",
  },
  choiceText: {
    fontWeight: "600",
    fontSize: 20,
    color: "#333",
    textShadowColor: "lightyellow",
    textShadowOffset: {
      width: 2,
      height: 1,
    },
    textShadowRadius: 2,
  },
});
export default Home;
