import {SafeAreaView, ScrollView, Button} from 'react-native';
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
  }, [data]);

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
          <ContentList data={data} fetchData={fetchData} isNext={nextPage}/>
        </LayoutComponent>
      </ScrollView>
    </SafeAreaView>
  );
}
