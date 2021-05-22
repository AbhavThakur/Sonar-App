/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Alert,
  BackHandler,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk-next';
import {SocialIcon} from 'react-native-elements';

// import {useFocusEffect} from '@react-navigation/native';

function LoginScreen(props) {
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

  const fbLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      // Sign-in the user with the credential
      await auth().signInWithCredential(facebookCredential);
    } catch (e) {
      console.log({e});
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/s1.jpg')}
        style={{
          width: 380,
          height: 300,
          bottom: 40,
        }}
      />
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          color: 'black',
          marginLeft: 10,
          paddingVertical: 5,
          paddingBottom: 20,
        }}>
        Welcome to the App
      </Text>
      {!loggedIn ? (
        <GoogleSigninButton
          style={{width: 192, height: 48, padding: 20}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={_signIn}
        />
      ) : (
        <View>{props.navigation.replace('App')}</View>
      )}
      {/* <SocialIcon title="Sign In With Facebook" button type="facebook" /> */}
      {!loggedIn ? (
        <TouchableOpacity
          onPress={fbLogin}
          style={{backgroundColor: '#0146c6', marginTop: 10, padding: 10}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            Login With Facebook
          </Text>
        </TouchableOpacity>
      ) : (
        <View>{props.navigation.replace('App')}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
});

export default LoginScreen;
