import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import detailStudent from '../screens/student/detailStudent';
import {Image, View, Text} from 'react-native';
import SProfile from '../screens/student/SProfile';
import Scopedetails from '../screens/student/Scopedetails';
import Sensedetails from '../screens/student/Sensedetails';
import SelectDetails from '../screens/student/SelectDetails';
import SceDetails from '../screens/student/SceDetails';
import SmecDetails from '../screens/student/SmecDetails';
import Details from '../screens/student/Details';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = ({navigation, route}) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={detailStudent}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Details" component={Scopedetails} />
      <Stack.Screen name="SenseDetails" component={Sensedetails} />
      <Stack.Screen name="SelectDetails" component={SelectDetails} />
      <Stack.Screen name="SceDetails" component={SceDetails} />
      <Stack.Screen name="SmecDetails" component={SmecDetails} />
      <Stack.Screen name="MainDetails" component={Details} />
    </Stack.Navigator>
  );
};

const AppStudentNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: '#03335e',
      activeTintColor: 'white',
      inactiveBackgroundColor: '#7a9bb8',
      inactiveTintColor: 'black',
      showLabel: false,
    }}>
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../Assets/home.png')}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                marginTop: 4,
                tintColor: focused ? 'white' : '#000000',
              }}
            />
            <Text
              style={{
                color: focused ? 'white' : '#000000',
                fontSize: 10,
                marginTop: 4,
                marginLeft: -6,
              }}>
              HOME
            </Text>
          </View>
        ),
      }}
    />
    {/* <Tab.Screen
      name="Events"
      component={detailStudent}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../Assets/event1.png')}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                marginTop: 4,
                tintColor: focused ? 'white' : '#000000',
              }}
            />
            <Text
              style={{
                color: focused ? 'white' : '#000000',
                fontSize: 10,
                marginTop: 4,
                marginLeft: -6,
              }}>
              EVENTS
            </Text>
          </View>
        ),
      }}
    /> */}
    <Tab.Screen
      name="Profile"
      component={SProfile}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../Assets/profileicon.png')}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                marginTop: 4,
                tintColor: focused ? 'white' : '#000000',
              }}
            />
            <Text
              style={{
                color: focused ? 'white' : '#000000',
                fontSize: 10,
                marginTop: 4,
                marginLeft: -6,
              }}>
              PROFILE
            </Text>
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);
export default AppStudentNavigation;
