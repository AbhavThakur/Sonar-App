import Onboarding from 'react-native-onboarding-swiper';
import {Image, StyleSheet} from 'react-native';
import React from 'react';

const SplashScreen = ({navigation}) => (
  <Onboarding
    bottomBarHighlight={false}
    onDone={() => navigation.replace('Welcome')}
    onSkip={() => navigation.replace('Welcome')}
    pages={[
      {
        backgroundColor: '#00aeef',
        image: (
          <Image source={require('../Assets/s1.jpg')} style={styles.img} />
        ),
        title: 'Learn online',
        subtitle: 'Be guided by the best teachers available',
      },
      {
        backgroundColor: '#ffd894',
        image: (
          <Image source={require('../Assets/s2.jpg')} style={styles.img} />
        ),
        title: 'Online classes',
        subtitle:
          'enjoy the most of learning by studying with others like you in the same environment ',
      },
      {
        backgroundColor: '#52ff94',
        image: (
          <Image source={require('../Assets/s3.jpg')} style={styles.img} />
        ),
        title: 'Being taught online',
        subtitle: 'Learn at your own pace',
      },
      {
        backgroundColor: '#d281fd',
        image: (
          <Image source={require('../Assets/s6.jpg')} style={styles.img} />
        ),
        title: 'Test yourself ',
        subtitle: 'Take tests and check progress',
      },
      {
        backgroundColor: '#94f3ff',
        image: (
          <Image source={require('../Assets/s8.jpg')} style={styles.img} />
        ),
        title: 'Difficulty in reading',
        subtitle: 'Communicate in your own language via signs!',
      },
    ]}
  />
);

const styles = StyleSheet.create({
  img: {
    width: 380,
    height: 300,
  },
});

export default SplashScreen;
