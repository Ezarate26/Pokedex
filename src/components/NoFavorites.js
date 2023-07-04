import React from "react";
import { Text, ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {COLORS} from "../utils/constants"


const image = { uri: "https://i.pinimg.com/564x/4e/96/4e/4e964edc0ae964bec29a3cf735477c13.jpg" }

export default function NoFavorites() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={image} style={styles.content}>
      <Text style={styles.text}>No tienes favoritos</Text>
      <Text onPress={() => navigation.navigate("Pokedex")} style={styles.btnLogoun}>Ir a Pokedex</Text> 
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize:25,
    fontWeight:"bold",
    marginTop: 20,
    textAlign: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    width: "80%",
    marginBottom: "10%",
    color: COLORS.yellow,
    backgroundColor: "rgba(29,52,84,0.7)",
  },
  btnLogoun: {
    width:"70%",
    borderColor:COLORS.yellow,
    fontSize: 16,
    fontWeight:"bold",
    textAlign: "center",
    color:COLORS.yellow,
    padding: 10,
    borderWidth:2,
    borderRadius: 10,
    backgroundColor:COLORS.blue
  },
});
