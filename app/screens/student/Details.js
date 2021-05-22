import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Details({route}) {
  const listening = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.txt}>{listening.name}</Text>
        <Image
          style={styles.image}
          source={{
            uri: listening.img,
          }}
          resizeMode="contain"
        />
        <View style={styles.box}>
          <Text style={styles.sub}>{listening.post}</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.sub2}>{listening.mail}</Text>
        </View>
        <View style={styles.box3}>
          <TextInput
            placeholderTextColor="black"
            placeholder="Give feedback"
            textAlign="left"
            style={{fontSize: 14, marginLeft: 10, fontWeight: 'bold'}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '90%',
    height: hp('30%'),
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
    fontSize: 20,

    color: 'white',
    fontWeight: 'bold',
  },
  sub2: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  box: {
    height: hp('7%'),
    width: wp('50%'),
    marginTop: hp('3%'),
    backgroundColor: '#e44e73',
    fontWeight: 'bold',
    // borderRadius: wp("100%") / 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    height: hp('7%'),
    width: wp('50%'),
    backgroundColor: '#f57595',
    fontWeight: 'bold',
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    left: 191,
    bottom: 50,
  },
  box3: {
    height: hp('20%'),
    width: wp('80%'),

    backgroundColor: '#ebf3f4',
    fontWeight: 'bold',
    borderRadius: wp('100%') / 28,
    marginLeft: wp('10%'),
    paddingTop: 20,
    elevation: 3,
  },
});

export default Details;
