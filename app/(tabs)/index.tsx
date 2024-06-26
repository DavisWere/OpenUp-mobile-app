import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Community from '../../components/screens/Community';
import Therapists from '../../components/screens/Therapists';
import { RootStackParamList } from '../../components/types';
import Toast, { BaseToast } from 'react-native-toast-message';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Community" component={Community} />
        <Tab.Screen name="Therapists" component={Therapists} />
      </Tab.Navigator>
      
    
  );
};

export default App;
