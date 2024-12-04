import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputCom = ({placeholder,keyboardType,secureTextEntry,onChangeText,value}) => {
  return (
    <View style={styles.contianer}>
        <TextInput placeholder={placeholder} placeholderTextColor={'gray'} style={styles.input} keyboardType={keyboardType} secureTextEntry={secureTextEntry} onChangeText={onChangeText} value={value}/>
    </View>
  )
}

export default InputCom

const styles = StyleSheet.create({
    contianer:{
        borderBottomWidth:1,
        borderBottomColor:'lightgray',
        // marginBottom:10
    },
    input:{
        color:'black',
        fontSize:14
    }
})