import {
  View,
  Text,
  Image,
  StyleSheet, TouchableWithoutFeedback
} from 'react-native';
import React from 'react';
import getColorByType from '../../Utils/Colors/colorByType';

export default function CardComponent({ pokemon }) {
  const goInfo  = () => {
    console.log("hola", pokemon.name)
  }
  const colors = getColorByType(pokemon.type)
  const bgType = {backgroundColor: colors, ...styles.bgStyles}

  return (
    <TouchableWithoutFeedback onPress={goInfo}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgType}>
          <Text style={styles.order}>#{`${pokemon.order}`.padStart(3,0)}</Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image source={{uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`}} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 180
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  order: {
    fontSize: 10,
    position: "relative",
    bottom: 0,
    color: "white"
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: "capitalize",
    fontWeight: "bold"
  },
  image: {
    position: 'relative',
    bottom: 25,
    right: 2,
    width: 160,
    height: 160,
  },
});
