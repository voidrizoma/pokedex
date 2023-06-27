import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import getColorByType from '../../Utils/Colors/colorByType';

export default function PokemonType({ types }) {
  const color = (type) => getColorByType(type);
  return (
    <View style={styles.content}>
    {types.map(item => (
      <View
        key={item.type.name}
        style={{ backgroundColor: color(item.type.name), ...styles.pill }}
      >
        <Text style={styles.textType}>{item.type.name}</Text>
      </View>
      ))}
    </View >
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  textType: {
    color: "white",
    textTransform: "uppercase"
  }
})