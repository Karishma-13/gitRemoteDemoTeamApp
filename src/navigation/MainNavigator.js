import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignupPage from '../screens/SignupPage';
import BottomTabNavigator from './BottomTabNavigator';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen name="SignupPage" component={SignupPage} />
    <Stack.Screen
      name="BottomTabNavigator"
      component={BottomTabNavigator}
      options={{headerShown: false}}
    />
    {/* add screens here  */}
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
