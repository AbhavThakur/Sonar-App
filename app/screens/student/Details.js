import React from 'react';
import { View, StyleSheet, Text, Image, TextInput } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Details({ route }) {
  const listening = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{listening.name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: listening.img,
        }}
        resizeMode="contain"
      />
      <View style={styles.box}>
        <Text style={styles.sub}>
          {listening.post}
        </Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.sub2}>{listening.mail}</Text>
      </View>
      <View style={styles.box3}>
        <TextInput
          placeholderTextColor="black"
          placeholder="Give feedback"
          textAlign="left"
          style={{ fontSize: 14, marginLeft: 10, fontWeight: "bold" }}
        />
      </View>
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
    height: hp("40%"),
  },
  txt: {
    color: 'black',
    fontSize: 22,
    marginLeft: wp('5%'),
    marginTop: hp('2%'),
    fontWeight: 'bold',
    padding: 10,
  },
  sub: {
    fontSize: 23,
    marginLeft: wp('8%'),
    marginTop: hp('2%'),
    color: "white",
    fontWeight: "bold"

  },
  sub2: {
    color: 'white',
    fontSize: 20,
    marginLeft: wp('40%'),

  },
  box: {
    height: hp('10%'),
    width: wp("100%"),
    marginTop: hp("3%"),
    backgroundColor: "#e44e73",
    fontWeight: "bold",
    // borderRadius: wp("100%") / 28,
    alignItems: "center",

  },
  box2: {
    height: hp('10%'),
    width: wp("100%"),
    // marginTop: hp("3%"),
    backgroundColor: "#f57595",
    fontWeight: "bold",
    paddingTop: 20,

  },
  box3: {
    height: hp('20%'),
    width: wp("80%"),
    marginTop: hp("3%"),
    backgroundColor: "#ebf3f4",
    fontWeight: "bold",
    borderRadius: wp("100%") / 28,
    marginLeft: wp("10%"),
    paddingTop: 20,
    elevation: 3,
  }
});

export default Details;
