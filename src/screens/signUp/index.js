import {Alert, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import InputCom from '../../components/InputCom';
import ButtonRound from '../../components/ButtonRound';
import auth from '@react-native-firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function _signUp() {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      Alert.alert('error', 'Please provide a valid email');
      return;
    }
    if (!password) {
      Alert.alert('error', 'Please enter password');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        console.log(data);
        if(data){
          Alert.alert('user Created Sussecccfully by firsebase',data?.user?.email)
        }
      })
      .catch(error=>{
        console.log(error.message)
        Alert.alert(error.message)
      })
  }
  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <View style={{flex: 0.5}}>
        <Image
          resizeMode="cover"
          source={require('../../assets/img/signIn.jpg')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={{paddingHorizontal: 20, flex: 0.3, marginTop: 30}}>
        <View style={[styles.containerSignUp, {marginBottom: 50}]}>
          <Text style={styles.titleSignUp}>Sign Up</Text>
          <Text style={styles.titleSignUpHree}>Signup here</Text>
        </View>
        <View>
          <InputCom
            placeholder={'username'}
            keyboardType={'email-address'}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <InputCom
            placeholder={'password'}
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={{marginVertical: 40, alignSelf: 'center'}}>
          <ButtonRound title={'SignUp'} onPress={_signUp} />
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  containerSignUp: {
    // marginVertical:60
  },
  titleSignUp: {
    color: '#000',
    fontWeight: '800',
    fontSize: 28,
  },
  titleSignUpHree: {
    color: 'gray',
    marginTop: -2,
    marginLeft: 5,
    fontSize: 14,
  },
});
