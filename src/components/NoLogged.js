import React from "react";
import { Text, ImageBackground } from "react-native";
import {COLORS} from "../utils/constants"
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const image = { uri: "https://w0.peakpx.com/wallpaper/22/196/HD-wallpaper-pokemon-azul-claro-pokemon.jpg" }


export default function NoLogged() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={image} style={styles.content}>
      <Text style={styles.text}>
        Para ver esta pantalla debes iniciar sesión
      </Text>
      <Text onPress={() => navigation.navigate("Account")} style={styles.btnLogoun}>Login</Text> 
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
