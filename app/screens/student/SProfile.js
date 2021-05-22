import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Foundation } from '@expo/vector-icons';
export default class SProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          image:
            'https://cdn3.iconfinder.com/data/icons/resume-dualine-flat-vol-1/64/Hard_Skills-512.png',
          title: 'Skills: React-Native,MongoDB,Node JS',
        },
        {
          id: 2,
          image:
            'https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-business-male-icon-vector-png-image_916468.jpg',
          title: 'abhavthakur25@gmail.com',
        },
        {
          id: 3,
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6vsyi5hbvhIOzPQD4a7Eahiein6qhS6i5Q&usqp=CAU',
          title: '+91-8988143226',
        },
        {
          id: 4,
          image:
            'data:image/jpeg;base64,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',
          title: 'App Developer at Valerio',
        },
        // {
        //   id: 5,
        //   image: "https://img.icons8.com/color/70/000000/shutdown.png",
        //   title: "Edit Profile",
        // },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={require('../../Assets/abhi1.jpeg')}
            />
            <Text style={styles.username}>Abhav Thakur</Text>
          </View>
        </View>

        <View style={styles.body}>
          <FlatList
            style={styles.container}
            enableEmptySections={true}
            data={this.state.data}
            keyExtractor={item => {
              return item.id;
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity>
                  <View style={styles.box}>
                    <Image style={styles.icon} source={{ uri: item.image }} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Image
                      style={styles.btn}
                      source={{
                        uri: 'https://img.icons8.com/customer/office/40',
                      }}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => console.log('logout')}
          activeOpacity={0.7}
          style={{
            top: 80,
            marginLeft: 40,
            width: '80%',
            borderRadius: 8,
            backgroundColor: '#045671',
            padding: 10,
            alignItems: 'center',
            elevation: 2,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  header: {
    backgroundColor: 'white',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#87d4ed',
    marginBottom: 10,
    marginTop: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 17,
    color: '#006080',
    marginLeft: 4,
    marginTop: 6,
  },
  btn: {
    marginLeft: 'auto',
    width: 40,
    height: 40,
  },
  body: {
    backgroundColor: '#E6E6FA',
  },
  box: {
    padding: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
    borderRadius: 8,
  },
  username: {
    color: '#243b65',
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 10,
  },
});
