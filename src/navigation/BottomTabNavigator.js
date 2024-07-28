// with simple bydefault style "BottomTabNavigator"

// import * as React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import SignupPage from '../screens/SignupPage';
// import TeamListScreen from '../screens/TeamListScreen';
// import HomeScreen from '../screens/HomeScreen';

// const Tab = createBottomTabNavigator();

// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="SignupPage" component={SignupPage} />
//       <Tab.Screen name="HomeScreen" component={HomeScreen} />
//       <Tab.Screen name="TeamListScreen" component={TeamListScreen} />
//     </Tab.Navigator>
//   );
// };
// export default BottomTabNavigator;

// with customized style "BottomTabNavigator"
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import TeamListScreen from '../screens/TeamListScreen';
import HomeScreen from '../screens/HomeScreen';
import SignupPage from '../screens/SignupPage';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({route}) => {
  const {name, email, country, image} = route.params || {};

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconSource;

          // Set icon based on the route name
          if (route.name === 'SignupPage') {
            iconSource = require('../assets/images/signupIcon.png');
          } else if (route.name === 'HomeScreen') {
            iconSource = require('../assets/images/homeIcon.png');
          } else if (route.name === 'TeamListScreen') {
            iconSource = require('../assets/images/teamIcon.png');
          }

          return (
            <View
              style={{
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
              }}>
              <Image
                source={iconSource}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: color,
                  //   borderRadius: 50,
                }}
                resizeMode="contain"
              />
            </View>
          );
        },
        tabBarActiveTintColor: 'crimson', // Active tab color
        tabBarInactiveTintColor: 'black', // Inactive tab color
        tabBarLabelStyle: {
          fontSize: 12, // Font size for tab labels
          fontWeight: '500',
        },
        tabBarStyle: {
          backgroundColor: '#CCCCFF', // Tab bar background color
          borderTopWidth: 0, // Remove the top border
          elevation: 0, // Remove shadow for Android
          shadowOffset: {width: 0, height: 0}, // Remove shadow for iOS
          shadowOpacity: 0, // Remove shadow for iOS
          height: 58,
        },
        tabBarItemStyle: {
          paddingHorizontal: 10, // Padding for each tab item
          paddingBottom: 5,
        },
      })}>
      <Tab.Screen name="HomeScreen">
        {props => (
          <HomeScreen
            {...props}
            name={name}
            email={email}
            country={country}
            image={image}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="TeamListScreen" component={TeamListScreen} />
      {/* <Tab.Screen name="SignupPage" component={SignupPage} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
