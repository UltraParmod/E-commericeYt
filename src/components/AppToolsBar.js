import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';


const AppToolsBar = ({navigation,lable}) => {
  return (
    <View style={{backgroundColor:'lightblue',flexDirection:'row',alignItems:'center', padding:5}}>
<TouchableOpacity onPress={()=>navigation.openDrawer()} >
        <Ionicons name="reorder-three-outline" color={'black'} size={40} />
</TouchableOpacity>
<Text style={{fontSize:22,color:'black',fontWeight:'700',marginLeft:20}}>{lable}</Text>
<Text />
    </View>
  )
}

export default AppToolsBar

const styles = StyleSheet.create({})