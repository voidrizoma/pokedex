import React from "react";
import {StyleSheet, FlatList, ActivityIndicator} from "react-native";
import CardComponent from "../Card/CardComponent";

export default function ContentList({ data, fetchData, isNext }) {

  const loadPokemons = () => {
    fetchData()
  }
  
  return (<FlatList testID="flatlist" data={data}
    showsVerticalScrollIndicator={false}
    keyExtractor={
      (pokemon) => String(pokemon.id)
    }
    renderItem={
      ({item}) => <CardComponent pokemon={item}/>
    }
    contentContainerStyle={
      styles.flatListContentContainer
    }
    onEndReachedThreshold={.1}
    onEndReached={loadPokemons}
    ListFooterComponent={
      isNext && (<ActivityIndicator size="large"
        style={
          styles.spinner
        }
        color="#AEAEAE"/>)
    }/>);
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 15
  },
  spinner: {
    marginBottom: 30,
    marginTop: 30
  }
});
