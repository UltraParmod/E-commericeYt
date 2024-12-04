import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppToolsBar from '../../components/AppToolsBar'

const Shop = ({navigation}) => {
  const [user,setUser]=useState()
  useEffect(()=>{
    getUserData()
  },[])
  async function  getUserData() {
      const userData=await _getFromAsyncStorage('user')
      if(userData){
        let userJson=JSON.parse(userData?.data)
        setUser(userJson)
      }
  }

  return (
    <View>
      <AppToolsBar lable={'MyShop'} navigation={navigation}/>
    </View>
  )
}

export default Shop

const styles = StyleSheet.create({})