import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Details({route}) {
  const listening = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{listening.name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: listening.img,
        }}
      />

      <Text style={styles.sub}>{listening.post}</Text>
      <Text style={styles.sub2}>{listening.mail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 300,
  },
  txt: {
    color: 'black',
    fontSize: 18,
    marginLeft: wp('5%'),
    marginTop: hp('2%'),
    fontWeight: 'bold',
    padding: 10,
  },
  sub: {
    color: 'black',
    fontSize: 18,
    marginLeft: wp('10%'),
    marginTop: hp('2%'),
  },
  sub2: {
    color: 'black',
    fontSize: 16,
    marginLeft: wp('50%'),
  },
});

export default Details;
