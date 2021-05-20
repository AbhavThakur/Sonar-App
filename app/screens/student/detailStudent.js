import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

import {Card, Button, Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const detailStudent = () => {
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
            <Button
              icon={<Icon name="code" color="#ffffff" />}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="VIEW NOW"
            />
          </Card>
          <Card title="EEE">
            <Image
              source={require('../../Assets/ec.jpeg')}
              style={styles.image}
            />
            <Text style={styles.paragraph}>EEE DEPARTMENT</Text>
            <Button
              icon={<Icon name="code" color="#ffffff" />}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="VIEW NOW"
            />
          </Card>
          <Card title="ECE">
            <Image
              source={require('../../Assets/ecm.jpeg')}
              style={styles.image}
            />
            <Text style={styles.paragraph}>ECM DEPARTMENT</Text>
            <Button
              icon={<Icon name="code" color="#ffffff" />}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="VIEW NOW"
            />
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
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  image: {
    width: wp('88%'),
    height: 200,
  },
});
