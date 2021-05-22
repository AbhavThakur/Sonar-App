import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import authNavigator from './app/navigations/authNavigator';
import AppStudentNavigation from './app/navigations/AppStudentNavigation';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={authNavigator} />
        <Stack.Screen name="App" component={AppStudentNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
