import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignupPage from '../screens/SignupPage';
import HomeScreen from '../screens/HomeScreen';
import TeamListScreen from '../screens/TeamListScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* register all screens here */}
      <Stack.Screen name="SignupPage" component={SignupPage} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="TeamListScreen" component={TeamListScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
