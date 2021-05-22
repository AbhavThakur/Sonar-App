import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import detailStudent from '../screens/student/detailStudent';

import SProfile from '../screens/student/SProfile';
import Scopedetails from '../screens/student/Scopedetails';
import Sensedetails from '../screens/student/Sensedetails';
import SelectDetails from '../screens/student/SelectDetails';
import SceDetails from '../screens/student/SceDetails';
import SmecDetails from '../screens/student/SmecDetails';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
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
  </Stack.Navigator>
);

const AppStudentNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: '#03335e',
      activeTintColor: 'white',
      inactiveBackgroundColor: '#7a9bb8',
      inactiveTintColor: 'black',
    }}>
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Events" component={detailStudent} />
    <Tab.Screen name="Profile" component={SProfile} />
  </Tab.Navigator>
);
export default AppStudentNavigation;
