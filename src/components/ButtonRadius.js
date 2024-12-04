import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonRadius = ({img,containerStyle,onPress}) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
    style={{...styles.container,...containerStyle}}>
     <Image source={img} style={{width:'100%',height:'100%'}} />
    </TouchableOpacity>
  )
}

export default ButtonRadius

const styles = StyleSheet.create({
  container:{
    width:30,
    height:30,
    borderRadius:30
  }
})