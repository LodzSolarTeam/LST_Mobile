import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Tabs from "./src/components/Tabs";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
const Tab = createBottomTabNavigator();
export default function App() {
  return (
      <NavigationContainer>
         <Tabs/>
      </NavigationContainer>
  );
}