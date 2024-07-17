import "react-native-gesture-handler";
// import React from 'react';
import React = require("react");
import Home from "@/components/Home";
import Resources from "@/components/Resources";
import AIchat from "@/components/AIchat";
import MessageList from "@/components/Messages";
import MessageInterface from "@/components/subcomponents/MessageInterface";
import Profile from "@/components/Profile";

import Community from "../../components/screens/Community";
import Therapists from "../../components/screens/Therapists";
import Appointments from "../../components/screens/Appointments";
import Accessibility from "@/components/subcomponents/Accessibility";

import Settings from "@/components/subcomponents/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CustomHeader from "./CustomHeader";
import { Ionicons } from "@expo/vector-icons";
import { AccessibilityProvider } from "@/components/subcomponents/AccessibilityContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const MessagesStack = createNativeStackNavigator();

function StackScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#dff2ff",
        },
      }}
    >
      <Stack.Screen
        name="Homescreen"
        component={Home}
        options={{
          header: () => <CustomHeader />,
        }}
      />
      <Stack.Screen name="Therapists" component={Therapists} />
      <Stack.Screen name="Appointments" component={Appointments} />
      <Stack.Screen name="Community" component={Community} />
      <Stack.Screen name="Accessibility" component={Accessibility} />
    </Stack.Navigator>
  );
}

function MessagesStackScreens() {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen
        name="MessageList"
        component={MessageList}
        options={{
          header: () => <CustomHeader />,
        }}
      />
      <MessagesStack.Screen
        name="MessageInterface"
        component={MessageInterface}
        options={{
          headerShown: false,
        }}
      />
    </MessagesStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();

function ProfileScreens() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="MyProfile"
        component={Profile}
        options={{
          header: () => <CustomHeader />,
        }}
      />
      <ProfileStack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: {
            backgroundColor: "#dff2ff",
          },
        }}
      />
    </ProfileStack.Navigator>
  );
}

export default function HomeScreen() {
  return (
    <AccessibilityProvider>
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
          tabBarActiveTintColor: "#00707a",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Resources"
          component={Resources}
          options={{
            header: () => <CustomHeader />,
          }}
        />
        <Tab.Screen
          name="AI chat"
          component={AIchat}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Home"
          component={StackScreens}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Messages"
          component={MessagesStackScreens}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreens}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </AccessibilityProvider>
  );
}
