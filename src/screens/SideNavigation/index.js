import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from '../welcome';
import CustomeDrawerContent from './CustomeDrawerContent';
import Shop from '../shop';

const Drawer=createDrawerNavigator()
const SideNavigation = (props) => {
  return (
   <Drawer.Navigator initialRouteName='WelcomeCall' 
   
    drawerContent={props=><CustomeDrawerContent {...props}/>}
    screenOptions={{
      headerShown:false,
      drawerActiveTintColor:'black',
      drawerActiveBackgroundColor:'white',
      drawerInactiveTintColor:'white'
    }}
   >
    <Drawer.Screen name='WelcomeCall' component={Welcome} />
    <Drawer.Screen name='Shop' component={Shop}/>

   </Drawer.Navigator>
  )
}

export default SideNavigation

const styles = StyleSheet.create({})