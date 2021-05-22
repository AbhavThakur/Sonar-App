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

const detailStudent = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Card title="SCOPE">
            <Image
              source={require('../../Assets/cse.jpeg')}
              style={styles.image}
            />

            <Text style={styles.paragraph}>SCOPE DEPARTMENT</Text>
            <Text style={styles.sub}>Programmes: U.G</Text>
            <View flexDirection="column">
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.branch}>Branch1</Text>
                <Text style={styles.branch}>Branch2</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.branch}>Branch3</Text>
                <Text style={styles.branch}>Branch4</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Details')}
              activeOpacity={0.6}>
              <Text style={styles.text}>View Now</Text>
            </TouchableOpacity>
          </Card>
          <Card title="SELECT">
            <Image
              source={require('../../Assets/ec.jpeg')}
              style={styles.image}
            />
            <Text style={styles.paragraph}>SELECT DEPARTMENT</Text>
            <Text style={styles.sub}>Programmes: U.G</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.branch}>Branch1</Text>
            </View>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('SelectDetails')}
              activeOpacity={0.6}>
              <Text style={styles.text}>View Now</Text>
            </TouchableOpacity>
          </Card>
          <Card title="SENSE">
            <Image
              source={require('../../Assets/ecm.jpeg')}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.paragraph}>SENSE DEPARTMENT</Text>
            <Text style={styles.sub}>Programmes: U.G</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.branch}>Branch1</Text>
              <Text style={styles.branch}>Branch2</Text>
            </View>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('SenseDetails')}
              activeOpacity={0.6}>
              <Text style={styles.text}>View Now</Text>
            </TouchableOpacity>
          </Card>
          <Card title="SCE">
            <Image
              source={require('../../Assets/civil.jpg')}
              style={styles.image}
            />
            <Text style={styles.paragraph}>SCE DEPARTMENT</Text>
            <Text style={styles.sub}>Programmes: U.G</Text>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.branch}>Branch1</Text>
            </View>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('SceDetails')}
              activeOpacity={0.6}>
              <Text style={styles.text}>View Now</Text>
            </TouchableOpacity>
          </Card>
          <Card title="SMEC">
            <Image
              source={require('../../Assets/mec.jpg')}
              style={styles.image}
            />
            <Text style={styles.paragraph}>SMEC DEPARTMENT</Text>
            <Text style={styles.sub}>Programmes: U.G</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.branch}>Branch1</Text>
              <Text style={styles.branch}>Branch2</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.branch}>Branch3</Text>
            </View>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('SmecDetails')}
              activeOpacity={0.6}>
              <Text style={styles.text}>View Now</Text>
            </TouchableOpacity>
          </Card>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default detailStudent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    marginTop: hp('2%'),
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  image: {
    width: wp('95%'),
    height: hp('18%'),
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
    marginTop: hp('2%'),
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  sub: {
    marginLeft: wp('5%'),
    fontSize: 18,
    textAlign: 'center',
    color: '#045671',
    marginTop: hp('1%'),
    fontWeight: 'bold',
  },
  branch: {
    marginLeft: wp('3%'),
    marginTop: hp('2%'),
    fontSize: 14,
    fontWeight: 'bold',
  },
});
