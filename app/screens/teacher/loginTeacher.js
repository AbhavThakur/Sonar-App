/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Alert, BackHandler, Text} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
// import {useFocusEffect} from '@react-navigation/native';

function LoginTeacher(props) {
  //   useFocusEffect(
  //     React.useCallback(() => {
  //       const onBackPress = () => {
  //         Alert.alert('Hold on!', 'Are you sure you want to exit app?', [
  //           {
  //             text: 'Cancel',
  //             onPress: () => null,
  //             style: 'cancel',
  //           },
  //           {text: 'YES', onPress: () => BackHandler.exitApp()},
  //         ]);
  //         return true;
  //       };

  //       // Add Event Listener for hardwareBackPress
  //       const backHandler = BackHandler.addEventListener(
  //         'hardwareBackPress',
  //         onBackPress,
  //       );

  //       return () => backHandler.remove();
  //     }, []),
  //   );
  const [loggedIn, setloggedIn] = useState(false);
  const [user, setUser] = useState([]);

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      setloggedIn(true);

      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      // console.log(idToken);

      await auth().signInWithCredential(credential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  function onAuthStateChanged(user) {
    setUser(user);

    if (user) setloggedIn(true);
  }

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '840739221854-89rrhdassahimi2i6gpnrngbvo4vpo62.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/st.jpg')}
        style={{
          width: 400,
          height: 500,
          // backgroundColor: "white"
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          color: 'black',
          marginLeft: 10,
        }}>
        Welcome to the App
      </Text>
      {!loggedIn ? (
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={_signIn}
        />
      ) : (
        <View>{props.navigation.navigate('teacherDetails')}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    marginTop: -60,
    backgroundColor: 'white',
  },
});

export default LoginTeacher;
