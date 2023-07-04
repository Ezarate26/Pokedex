import React, { useEffect, useState } from "react";
import { ImageBackground, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import Favorite from "../components/Pokemon/Favorite";
import useAuth from "../hooks/useAuth";

const image = { uri: "https://i.pinimg.com/736x/ed/6b/74/ed6b74390b08d5224eff49b509578636--phone-wallpapers-marathon.jpg" }


export default function PokemonScreen(props) {
  const {
    route: { params },
    navigation,
  } = props;
  const [pokemon, setPokemon] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={pokemon?.id} />,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params, pokemon]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <ImageBackground source={image} style={{flex: 1,
    justifyContent: 'center',}}>
      <Header 
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
      </ImageBackground>
    </ScrollView>
  );
}
