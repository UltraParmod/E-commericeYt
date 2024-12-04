import {ActivityIndicator, Alert, Button, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import ButtonRound from '../../components/ButtonRound';
import ButtonRadius from '../../components/ButtonRadius';
import { useNavigation } from '@react-navigation/native';
import { _signInwithGoogle } from '../../config/firebase/GoogleSignIn';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { axiosClient, SIGN_IN } from '../../config/api';
import { _storeIntoAsyncStorage } from '../../config/asyncStorage';

const Sigin = () => {
  const navigation=useNavigation()
  const [loading, setLoading] = useState(false);



async function GoogleSignIn (){
  _signInwithGoogle().then(data=>{
    // console.log('GoogleSignin Sussess....data.=>',data)

    if(!data){
      Alert.alert('Error ',"No Data Found from Google firebase ")
      return
    }
    // console.log('GoogleSignin Sussess.....=>',data)
    setTimeout(() => setLoading(true), 3000);
    if(data?.type=="success"){
        navigation.navigate('SideNavigation',data)
        _storeIntoAsyncStorage('user',JSON.stringify(data))
      }else(
        Alert.alert('Google SignIn  unsuccessfull Try again')
      )
      setTimeout(() => setLoading(false), 3000);
      // return
      // _sign_in_api(data)
    })
  }

  // async function _sign_in_api(googleData){
  //   // loading Open 
  //   const apiParams={
  //     loginSource:'google',
  //     idToken:data?.idToken,
  //     name:data?.user?.name,
  //     email:data?.user?.email,
  //     userId:data?.user?.id,
  //     photo:data?.user?.photo,
  //     fcmToken:'fcm_110202'
  //   }
  //   console.log(',,,,,,,',apiParams)
  //   if(type=="success"){
  //     console.log('.....',apiParams)
  //     // Alert.alert('Hii,',data?.user?.name, 'you are successfully created Google SignIn account. Now you can press ok then go to welcome Screen.', [
  //     //   {text: 'OK', onPress: () => navigation.navigate('WelcomeCall' ,apiParams)},
  //     // ]);
  //     console.log('true')
  //   }else{
  //     // alert('Somethings went wrong')
  //     console.log('false')

  //   }
    
  //   // ########################
  //   // const {data,status}=await axiosClient.post(SIGN_IN,apiParams)
  //   // loading Closed 
  //   // if(status==200){
  //   //   if(data.status=="200"){
  //   //     navigation.navigate('WelcomeCall')
  //   //   }else{
  //   //     alert('error')
  //   //   }
  //   // }else{
  //   //   alert('error from Server')
  //   // }

  // }
  return (
    <View style={{flex: 1}}>
     
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      {loading ? (
       <View style={{width:'100%',justifyContent:'center' ,height:'100%',zIndex:999,position:'absolute',backgroundColor:'#f1f1f1'}}>
         <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
       null
      )}
   
      <View style={{flex: 0.5}}>
        <Image
          resizeMode="cover"
          source={require('../../assets/img/signIn.jpg')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={{flex: 0.5, backgroundColor: 'rgba(216,166,216,1)',paddingBottom:100}}>
        <Text style={styles.titleHelo}>Heelo E-commerice</Text>
        <Text style={[styles.titleHelo, styles.titleWlcome]}>
          Welcome to E-Shop.com
        </Text>
        <View style={styles.ButtonRoundContianer}>
          <ButtonRound
            title={'Login'}
            onPress={() => {
              alert('Login');
            }}
            btnContianerStyle={styles.btnContianerLogin}
          />
          <ButtonRound
            title={'SignUp'}
            border={true}
            onPress={() => {
              navigation.navigate('SignUpCall')
            }}
          />
        </View>
        <Text style={styles.titleSocalAccout}>Or via socal media account.</Text>
        <View style={styles.ButtonRadiusContainer}>
            <ButtonRadius onPress={()=>{
                alert('kk')
            }} containerStyle={{marginHorizontal:10,}} img={(require('../../assets/img/facebook.png'))}/>
            <ButtonRadius onPress={()=>{
               GoogleSignIn()
            }}  img={(require('../../assets/img/google.png'))}/>
        </View>
      </View>
    </View>
  );
};

export default Sigin;

const styles = StyleSheet.create({
  titleHelo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  titleWlcome: {
    fontSize: 11,
  },
  ButtonRoundContianer: {
    flexDirection: 'row',
    marginVertical: 60,
    alignSelf: 'center',
  },
  btnContianerLogin: {
    marginRight: 20,
  },
  titleSocalAccout: {
    color: '#000',
    alignSelf: 'center',
    fontSize: 12,
    textAlign:'center',
    fontWeight: '600',
    marginTop:80,
    marginBottom:5
  },
  ButtonRadiusContainer:{
    flexDirection:'row',
    alignSelf:'center'
  }
});
