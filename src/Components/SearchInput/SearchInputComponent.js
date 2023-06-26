// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchBar = ({onChangeText}) => {
  return (
    <View style={styles.container}>
       <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Busca tu Pokémon"
      />
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10
  },
});
