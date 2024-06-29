import 'react-native-gesture-handler';
import React from 'react';

import Home from '@/components/Home';
import Resources from '@/components/Resources';
import AIchat from '@/components/AIchat';
import Messages from '@/components/Messages';
import Profile from '@/components/Profile';

import Community from '../../components/screens/Community';
import Therapists from '../../components/screens/Therapists';
import Appointments from '../../components/screens/Appointments';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import CustomHeader from './CustomHeader';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Homescreen" component={Home} options={
        {
          header: ()=><CustomHeader/>
        }
      }/>
      <Stack.Screen name="Therapists" component={Therapists}/>
      <Stack.Screen name="Appointments" component={Appointments} />
      <Stack.Screen name="Community" component={Community} />
    </Stack.Navigator>
  );
}
export default function HomeScreen() {
  return (
      <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused? 'home' : 'home-outline';
          } else if (route.name === 'Messages') {
            iconName = focused? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
          } else if (route.name === 'Profile') {
            iconName = focused? 'person' : 'person-outline';
          } else if (route.name === 'Resources') {
            iconName = focused? 'bookmark' : 'bookmark-outline';
          } else if (route.name === 'AI chat') {
            iconName = focused? 'chatbubbles' : 'chatbubbles-outline';
          }

          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#f9c70c',
        tabBarInactiveTintColor: 'gray',
      })}>  
        <Tab.Screen name='Resources' component={Resources} options={{
          header: ()=><CustomHeader/>,
        }}/>
        <Tab.Screen name='AI chat' component={AIchat} options={{
          header: ()=><CustomHeader/>,
        }}/>
        <Tab.Screen name='Home' component={StackScreens} options={{
          headerShown: false
        }}/>
        <Tab.Screen name='Messages' component={Messages} options={{
          header: ()=><CustomHeader/>,
        }}/>
        <Tab.Screen name='Profile' component={Profile} options={{
          header: ()=><CustomHeader/>,
        }}/>
      </Tab.Navigator>
  );
};
