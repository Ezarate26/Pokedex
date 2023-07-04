import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonDetailsByUrlApi, getPokemonsApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function PokedexScreen() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemon();
    })();
  }, []);

  const loadPokemon = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      
      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
      setNextUrl(response.next);
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <PokemonList
        pokemons={pokemons}
        loadPokemon={loadPokemon}
        isNext={nextUrl}
      />
  );
}
