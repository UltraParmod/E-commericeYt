import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Sigin from '../sigin';
import { useNavigation } from '@react-navigation/native';
import { _getFromAsyncStorage } from '../../config/asyncStorage';

const SplaceScreen = () => {
  const navigation=useNavigation()
  setTimeout(() => {
      navigation.replace('SignInCall')
      checkUser()
  }, 2000);

  async function checkUser() {
    const value=await _getFromAsyncStorage('user')
    // console.log('llllllllllllllllll', value)
    if(!value){
         navigation.replace('SignInCall')
    }else{
      navigation.replace('SideNavigation')
    }
  }
  return (
    <ImageBackground source={require('../../assets/img/splash01.jpg')} 
      // resizeMode='cover'
    style={styles.backgroundImg}>
      <View style={styles.overlaw}>

        <Text style={styles.headingTitle}>E-commerice App</Text>
      </View>
    </ImageBackground>  
  )
}

export default SplaceScreen

const styles = StyleSheet.create({
  backgroundImg:{
    flex:1,
  },
  overlaw:{
    backgroundColor:'rgba(0,0,255,.3)',
    flex:1
  },
  headingTitle:{
    fontSize:24,
    color:'#ffff',
    fontWeight:'bold',
    textAlign:'center',marginVertical:100
  }
})