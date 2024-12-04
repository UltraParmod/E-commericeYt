import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonRound = ({title,border=false,btnContianerStyle,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
     style={[{...styles.btnContianer,...btnContianerStyle,},{backgroundColor:border?'white':'blue'}]}>
      <Text style={[styles.title,{color:border?"black":"white",}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonRound

const styles = StyleSheet.create({
    btnContianer:{
        padding:8, 
        paddingHorizontal:30,
        borderRadius:20,
    },
    title:{
        fontSize:18,
        color:'#fff',
        textAlign:'center',
        fontWeight:'600'
    }
})