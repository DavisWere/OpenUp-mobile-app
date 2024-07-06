import "react-native-gesture-handler";
import React = require("react");
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WelcomeScreen from "./WelcomeScreen";
import SignUp from "./Signup";
import Login from "./Login";
import HomeScreen from "../../components/Home";
import Resources from "../../components/Resources";
import AIchat from "../../components/AIchat";
import Messages from "../../components/Messages";
import Profile from "../../components/Profile";

import Community from "../../components/screens/Community";
import Therapists from "../../components/screens/Therapists";
import Appointments from "../../components/screens/Appointments";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack navigator for screens after login
function StackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Therapists" component={Therapists} />
      <Stack.Screen name="Appointments" component={Appointments} />
      <Stack.Screen name="Community" component={Community} />
    </Stack.Navigator>
  );
}

// Bottom tab navigator for resources, AI chat, messages, and profile
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Messages") {
            iconName = focused
              ? "chatbox-ellipses"
              : "chatbox-ellipses-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Resources") {
            iconName = focused ? "bookmark" : "bookmark-outline";
          } else if (route.name === "AI chat") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#f9c70c",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Resources"
        component={Resources}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AI chat"
        component={AIchat}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Home"
        component={StackScreens}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeScreen" component={TabNavigator} />
    </Stack.Navigator>
  );
}
