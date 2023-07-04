import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonsFavoriteApi } from "../api/pokemonFavorite";
import { getPokemonDetailsApi } from "../api/pokemon";
import useAuth from "../hooks/useAuth";
import PokemonList from "../components/PokemonList";
import NoLogged from "../components/NoLogged";
import NoFavorites from "../components/NoFavorites";
import { size } from "lodash";


export default function FavoriteScreen() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi();
          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsApi(id);

            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }

          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  if (auth) {
    return size(pokemons) > 0 ? (
      <PokemonList pokemons={pokemons} />
    ) : (
      <NoFavorites />
    );
  } else {
    return <NoLogged />;
  }
}
