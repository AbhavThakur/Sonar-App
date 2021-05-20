/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function Welcome({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../Assets/login.jpg')}
        style={{width: '100%', height: '80%', marginTop: -250}}
        resizeMode="contain"
      />
      <Text style={{fontSize: 36, fontWeight: 'bold', marginTop: -140}}>
        Hello
      </Text>
      <Text style={{fontSize: 24, color: 'gray', textAlign: 'center'}}>
        Welcome to Sonar App!!
      </Text>
      <Text style={{fontSize: 18, color: 'gray', textAlign: 'center'}}>
        Select Your Stream
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginStudent')}
          style={{
            backgroundColor: '#0d47a1',
            padding: 10,
            width: 150,
            borderRadius: 30,
            marginTop: 30,
            marginHorizontal: 10,
          }}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 22}}>
            Student
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('teacherLogin')}
          style={{
            backgroundColor: 'white',
            padding: 10,
            width: 150,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#0d47a1',
            marginTop: 30,
            marginHorizontal: 10,
          }}>
          <Text style={{textAlign: 'center', color: '#0d47a1', fontSize: 22}}>
            Teacher
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
