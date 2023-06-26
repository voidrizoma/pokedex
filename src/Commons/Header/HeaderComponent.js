import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import HeaderCircles from '../../../assets/header-circles.png'

export default function HeaderComponent() {
  return (
    <View style={style.header}>
      <Image source={HeaderCircles} style={{}}/>
    </View>
  )
}

const style = StyleSheet.create({
  header:{
  marginTop: 10,
marginBottom: 10 }
})