import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import HeaderComponent from '../Header/HeaderComponent';
import React from 'react'

export default function LayoutComponent({children}) {
  return (
    <View style={styles.mainContainer}>
      <HeaderComponent />
      {children}
    </View>
  )
}
let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "red", 
    height: ScreenHeight,
    

  }
});
