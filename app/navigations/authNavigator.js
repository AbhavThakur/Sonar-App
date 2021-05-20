import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import SplashScreen from '../screens/SplashScreen';

import Login from '../screens/student/Login';
import detailStudent from '../screens/student/detailStudent';

import loginTeacher from '../screens/teacher/loginTeacher';
import detailsTeacher from '../screens/teacher/detailsTeacher';

const Stack = createStackNavigator();

function authNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="onBoard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen name="onBoard" component={SplashScreen} />
      <Stack.Screen name="LoginStudent" component={Login} />
      <Stack.Screen name="studentDetails" component={detailStudent} />
      <Stack.Screen name="teacherLogin" component={loginTeacher} />
      <Stack.Screen name="teacherDetails" component={detailsTeacher} />
    </Stack.Navigator>
  );
}

export default authNavigator;
