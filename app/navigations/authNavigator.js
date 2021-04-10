import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

function authNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen name="onBoard" component={SplashScreen} />
    </Stack.Navigator>
  );
}

export default authNavigator;
