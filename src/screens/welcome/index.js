import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {_getFromAsyncStorage} from '../../config/asyncStorage';
import AppToolsBar from '../../components/AppToolsBar';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

const Welcome = ({navigation}) => {
  const [user, setUser] = useState();
  const [facebookData, setFacebookData] = useState('');
  useEffect(() => {
    getUserData();
  }, []);
  async function getUserData() {
    const userData = await _getFromAsyncStorage('user');
    if (userData) {
      let userJson = JSON.parse(userData?.data);
      console.log('gggggg', userJson);

      setUser(userJson);
    }
  }
  console.log(user);
  // facebook Login
  const _facebookLogin = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  };

  useEffect(()=>{
    
  },[])
  return (
    <View style={{flex: 1}}>
      <AppToolsBar navigation={navigation} lable={'Welcome'} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 900}}>
          This data from Google SignIn{' '}
        </Text>
        <Text>Welcome Screen</Text>
        <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>
          {user?.data?.user?.name}
        </Text>
        <Text style={{textAlign: 'center', fontSize: 14, color: 'black'}}>
          {user?.data?.user?.email}
        </Text>
        <TouchableOpacity
        onPress={()=>_facebookLogin().then(res=>{
          console.log(res)
          setFacebookData(res)
        }).catch(error=>console.log(error))
      }
          style={{
            backgroundColor: 'blue',
            flexDirection: 'row',
            width: '50%',
            padding: 10,
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: '900',
              fontSize: 16,
            }}>
            Facebook Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
