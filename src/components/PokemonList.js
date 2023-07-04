import React from "react";
import { StyleSheet, FlatList, Platform, ImageBackground } from "react-native";
import PokemonCard from "./PokemonCard";
import { ActivityIndicator } from "react-native";

const image = { uri: "https://i.pinimg.com/564x/4e/96/4e/4e964edc0ae964bec29a3cf735477c13.jpg" }


export default function PokemonList(props) {
  const { pokemons, loadPokemon, isNext } = props;

  const loadMore = () => {
    loadPokemon();
  };

  return (
    <ImageBackground source={image} style={styles.bgImage}> 
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      key={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && <ActivityIndicator size="large" style={styles.spinner} />
      }
      />
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
  }
});
