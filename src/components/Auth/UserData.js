import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import useAuth from "../../hooks/useAuth";
import { View, Text, StyleSheet} from "react-native";
import { size } from "lodash";
import { getPokemonsFavoriteApi } from "../../api/pokemonFavorite";
import {COLORS} from "../../utils/constants"
import ItemMenu from "./ItemMenu"

export default function UserData() {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonsFavoriteApi();
          setTotal(size(response));
        } catch (error) {
          setTotal(0);
        }
      })();
    })
  );

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido, {`${auth.firstName} ${auth.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Total Favoritos" text={`${total} pokemons`} />
      </View>

      <Text onPress={logout} style={styles.btnLogoun}>Desconectarse</Text> 
    </View>
  );
}



const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    padding:10,
    textAlign:"center",
    fontWeight: "bold",
    fontSize: 22,
    color: COLORS.yellow,
    borderRadius: 10,
    backgroundColor: "rgba(29,52,84,0.7)",
  },
  dataContent: {
    marginBottom: 20,
  },
  btnLogoun: {
    borderColor:COLORS.yellow,
    fontSize: 16,
    fontWeight:"bold",
    textAlign: "center",
    color:COLORS.yellow,
    padding: 10,
    borderWidth:2,
    borderRadius: 10,
    backgroundColor:"#0305A8"
  },
});
