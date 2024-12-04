import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { _getFromAsyncStorage } from '../../config/asyncStorage'

const CustomeDrawerContent = (props) => {
  const [user,setUser]=useState()
  useEffect(()=>{
    getUserData()
  },[])
  async function  getUserData() {
      const userData=await _getFromAsyncStorage('user')
      if(userData){
        let userJson=JSON.parse(userData?.data)
        console.log('conent .....',userJson)
        setUser(userJson)
      }
  }

  return (
<View style={{backgroundColor:'skyblue',flex:1,}}>
    <View style={{width:100,height:100,alignSelf:'center',marginVertical:10}}>
        <Image source={require('../../assets/img/man.png')} style={{width:'100%',height:'100%',resizeMode:'contain'}}/>
    </View>
        <Text style={{color:'black',textAlign:'center',alignSelf:'center',fontWeight:'bold',fontSize:15,width:'90%'}} numberOfLines={1}>{user?.data?.user?.name}</Text>
        <Text style={{color:'black',textAlign:'center',alignSelf:'center',fontSize:14,width:'90%'}} numberOfLines={1}>{user?.data?.user?.email}</Text>

     <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
     </DrawerContentScrollView>
</View>
  )
}

export default CustomeDrawerContent

const styles = StyleSheet.create({})