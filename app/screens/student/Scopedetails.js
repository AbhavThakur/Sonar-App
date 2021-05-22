import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Scopedetails = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>SCOPE DEPARTMENT</Text>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => console.log('hello')}
            activeOpacity={0.6}>
            <Text style={styles.text}>View Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default Scopedetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  image: {
    width: wp('90%'),
    height: hp('20%'),
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('80%'),
    marginLeft: wp('5%'),
    height: hp('6%'),
    padding: hp('1%'),
    backgroundColor: '#065a7f',
    borderRadius: wp('60%') / 24,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
