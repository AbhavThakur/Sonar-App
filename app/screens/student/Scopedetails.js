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

  useEffect(() => {
    const info = async () => {
      const dd = await fetch('https://nodetestrestapi.herokuapp.com/scope', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const resData = await dd.json();
      setData(resData);
    };
    info();
  }, []);

  const header = () => {
    return (
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 24}}>Teacher Details</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={value}
          ListHeaderComponent={header}
          stickyHeaderIndices={[0]}
          renderItem={({item}) => (
            <View style={styles.container}>
              <View style={styles.card}>
                <Image
                  source={{
                    uri: item.img,
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
    backgroundColor: 'white',
  },
  card: {
    height: hp('30%'),
    width: wp('90%'),
    backgroundColor: '#e5ecfa',
    // borderWidth:0.7,
    marginTop: hp('6%'),
    marginLeft: wp('5%'),
    borderRadius: wp('80%') / 12,
  },
  txt: {
    color: 'black',
    fontSize: 18,
    marginLeft: wp('50%'),
    marginTop: hp('6%'),
    fontWeight: 'bold',
  },
  sub: {
    color: 'black',
    fontSize: 18,
    marginLeft: wp('50%'),
    marginTop: hp('2%'),
  },
  sub2: {
    color: 'black',
    fontSize: 16,
    marginLeft: wp('50%'),
    marginTop: hp('2%'),
  },
});

export default Scopedetails;
