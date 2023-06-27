import {SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import React, {useState, useEffect} from 'react';
import LayoutComponent from '../../Commons/Layout/LayoutComponent';
import {
  getRequestPerLimitApi,
  getRequestDetailsApi,
} from '../../Utils/Axios/AxiosInstance';
import ContentList from '../../Components/ScreenContainer/ScreenContainer';

export default function Home() {
  const [data, setData] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    (async () => {
      await fetchData();;
    })();
  }, []);

  const fetchData = async () => {
    try {
      const dataResults = await getRequestPerLimitApi(nextPage);
      setNextPage(dataResults.data.next);
      const pokemonsList = [];
      for await (const pokemons of dataResults.data.results) {
        const detailsPokemon = await getRequestDetailsApi(pokemons.url);
        pokemonsList.push({
          id: detailsPokemon.data.id,
          name: detailsPokemon.data.name,
          type: detailsPokemon.data.types[0].type.name,
          order: detailsPokemon.data.order,
          types: detailsPokemon.data.types,
          stats: detailsPokemon.data.stats
        });
      }
      setData([...data, ...pokemonsList]);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <SafeAreaView>
      <ScrollView>
        <LayoutComponent>
          <View style={styles.content}>
          <ContentList data={data} fetchData={fetchData} isNext={nextPage}/>
          </View>
        </LayoutComponent>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    height: 550,
    margin: 35,
    marginBottom: 10,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 100,
    padding: 30
  }
})
