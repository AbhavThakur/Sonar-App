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
          <Image source={require('../Assets/s1.png')} style={styles.img} />
        ),
        title: 'Learn online',
        titleStyles: {fontSize: 42, fontWeight: 'bold'},
        subtitle: 'Be guided by the best teachers available',
        subTitleStyles: {fontSize: 18, color: '#fffafa'},
      },
      {
        backgroundColor: '#ffd894',
        image: (
          <Image source={require('../Assets/s2.png')} style={styles.img} />
        ),
        title: 'Online classes',
        titleStyles: {fontSize: 42, fontWeight: 'bold', color: '#4b004d'},
        subtitle:
          'enjoy the most of learning by studying with others like you in the same environment ',
        subTitleStyles: {fontSize: 18, color: '#5e0a61'},
      },

      {
        backgroundColor: '#52ff94',
        image: (
          <Image source={require('../Assets/s3.png')} style={styles.img} />
        ),
        title: 'Being taught online',
        titleStyles: {fontSize: 36, fontWeight: 'bold', color: '#024101'},
        subtitle: 'Learn at your own pace',
        subTitleStyles: {fontSize: 18, color: '#076105'},
      },
      {
        backgroundColor: '#d281fd',
        image: (
          <Image source={require('../Assets/s6.png')} style={styles.img} />
        ),
        title: 'Test yourself ',
        titleStyles: {fontSize: 36, fontWeight: 'bold', color: '#35013c'},
        subtitle: 'Take tests and check progress',
        subTitleStyles: {fontSize: 18, color: '#4d2852'},
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
