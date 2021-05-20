import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import detailStudent from '../screens/student/detailStudent';
import SProfile from '../screens/student/SProfile';

const Tab = createBottomTabNavigator();

const AppStudentNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: '#8eb1c6',
      activeTintColor: 'white',
      inactiveBackgroundColor: '#FCCB45',
      inactiveTintColor: 'black',
    }}>
    <Tab.Screen name="Home" component={detailStudent} />
    <Tab.Screen name="Events" component={detailStudent} />
    <Tab.Screen name="Profile" component={SProfile} />
  </Tab.Navigator>
);
export default AppStudentNavigation;
