import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Scopedetails = ({navigation}) => {
  const [value, setData] = useState([]);

  useEffect(async () => {
    const dd = fetch('https://nodetestrestapi.herokuapp.com/scope', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const resData = dd.json();
    setData(resData);
  });

  const header = () => {
    return (
      <View>
        <View
          style={{
            position: 'absolute',
            left: 15,
            top: 20,
          }}>
          <TouchableOpacity
            activeOpacity={0.5}
            // style={{backgroundColor: 'yellow'}}
            onPress={() => navigation.goBack()}>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={value}
          ListHeaderComponent={header}
          stickyHeaderIndices={[0]}
          renderItem={({item}) => (
            <View>
              <Image
                source={{
                  uri:
                    'https://chennai.vit.ac.in/wp-content/uploads/2020/02/Dr.Elavenil-S.jpg',
                }}
                style={{
                  height: hp('26%'),
                  width: wp('40%'),
                  position: 'absolute',
                  left: 10,
                  top: 10,
                  borderRadius: wp('40%') / 16,
                }}
              />
              <Text style={styles.txt}>{item.name}</Text>
              <Text style={styles.sub}>{item.post}</Text>
              <Text style={styles.sub2}>{item.mail}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

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
  txt: {
    color: 'white',
    fontSize: 18,
    marginLeft: wp('50%'),
    marginTop: hp('6%'),
    fontWeight: 'bold',
  },
  sub: {
    color: 'white',
    fontSize: 18,
    marginLeft: wp('50%'),
    marginTop: hp('2%'),
  },
  sub2: {
    color: 'white',
    fontSize: 16,
    marginLeft: wp('50%'),
    marginTop: hp('2%'),
  },
});

export default Scopedetails;
