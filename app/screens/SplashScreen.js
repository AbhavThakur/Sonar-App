import Onboarding from 'react-native-onboarding-swiper';
import {Image, StyleSheet} from 'react-native';
import React from 'react';

const SplashScreen = ({navigation}) => (
  <Onboarding
    bottomBarHighlight={false}
    showSkip={false}
    onDone={() => navigation.replace('Home')}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('./images/s1.jpg')} style={styles.img} />,
        title: 'Learn online',
        subtitle: 'Be guided by the best teachers available',
      },
      {
        backgroundColor: 'white',
        image: <Image source={require('./images/s2.jpg')} style={styles.img} />,
        title: 'Online classes',
        subtitle:
          'enjoy the most of learning by studying with others like you in the same environment ',
      },
      {
        backgroundColor: 'white',
        image: <Image source={require('./images/s3.jpg')} style={styles.img} />,
        title: 'Being taught online',
        subtitle: 'Learn at your own pace',
      },
      {
        backgroundColor: 'white',
        image: <Image source={require('./images/s6.jpg')} style={styles.img} />,
        title: 'Test yourself ',
        subtitle: 'Take tests and check progress',
      },
      {
        backgroundColor: 'white',
        image: <Image source={require('./images/s8.jpg')} style={styles.img} />,
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
