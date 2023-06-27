import {
  View,
  Text,
  Image,
  StyleSheet, TouchableWithoutFeedback, Modal, Pressable
} from 'react-native';
import React, {useState} from 'react';
import getColorByType from '../../Utils/Colors/colorByType';
import PokemonType  from "../PokemonTypes/PokemonTypesComponent"
import StatsPokemon from '../StatsPokemon/StatsPokemonComponent';

export default function CardComponent({ pokemon }) {
  const [modalVisible, setModalVisible] = useState(false);
  
  const colors = getColorByType(pokemon.type)
  const bgType = {backgroundColor: colors, ...styles.bgStyles}
  const bgTypeModal = {backgroundColor: colors, ...styles.bgStylesModal}

  return (
    <>
    <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>

      <View style={styles.card}>

        <View style={styles.spacing}>
          <View style={bgType}>
          <Text style={styles.order}># {`${pokemon.order}`.padStart(4,0)}</Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image source={{uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`}} style={styles.image} />
          </View>
        </View>

      </View>

    </TouchableWithoutFeedback>
         <Modal
         animationType="slide"
         transparent={false}
         visible={modalVisible}
         onRequestClose={() => {
           setModalVisible(!modalVisible);
         }}>
         <View style={styles.centeredView}>
          <View>
          <View style={styles.modalView}>
           <View style={bgTypeModal}>
            <Text style={styles.nameModal}>{pokemon.name}</Text>
            <Image source={{uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`}} style={styles.imageModal} />
          </View>
          <View>
          <PokemonType types={pokemon.types}/>
          </View>
          <View>
          <StatsPokemon stats={pokemon.stats}/>
          </View>

             <Pressable
               style={{backgroundColor: colors, ...styles.button }}
               onPress={() => setModalVisible(false)}>
               <Text style={styles.textStyle}>X</Text>
             </Pressable>
           </View>
          </View>

         </View>
       </Modal>
</>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: "auto"
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10
  },
  bgStylesModal: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 100,
    padding: 20,
    width: "100%",
    height: 70
  },
  order: {
    fontSize: 10,
    position: "relative",
    bottom: 0,
    color: "white"
  },
  nameModal: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "bold"
  },
  imageModal: {
    position: 'relative',
    bottom: 60,
    left: 70,
    width: 200,
    height: 200,
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
    bottom: 0,
    left: 20,
    width: 180,
    height: 180,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#181818"
  },
  modalView: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 100,
    margin: 10,
    width: 350,
    height: 500,
    backgroundColor: '#fbfbf9',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  }
});
