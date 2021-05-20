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

  var provider = new firebase.auth.GithubAuthProvider();

  const github = async () => {
    try {
      const user = await firebase
        .auth()
        .siginInWithPop(provider)
        .then(result => {
          var credential = result.credential;

          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          var token = credential.accessToken;

          // The signed-in user info.
          var user = result.user;
        });
      await auth().signInWithCredential();
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/collge.jpg')}
        style={{
          width: 300,
          height: 300,
          marginLeft: 30,
        }}
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
        <View>{props.navigation.replace('App')}</View>
      )}
      {!loggedIn ? (
        <TouchableOpacity onPress={fbLogin} style={{backgroundColor: 'yellow'}}>
          <Text>Login With Facebook</Text>
        </TouchableOpacity>
      ) : (
        <View>{props.navigation.replace('App')}</View>
      )}
      {!loggedIn ? (
        <TouchableOpacity onPress={github} style={{backgroundColor: 'yellow'}}>
          <Text>Login With Github</Text>
        </TouchableOpacity>
      ) : (
        <View>{props.navigation.replace('App')}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 40,
    padding: 10,
  },
});

export default LoginScreen;