import React from "react";
import { ImageBackground,StyleSheet } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
import useAuth from "../hooks/useAuth";


const image = { uri: "https://w0.peakpx.com/wallpaper/1008/452/HD-wallpaper-pokemon-battle.jpg" }

export default function AccountScreen() {
  const { auth } = useAuth();

  return <ImageBackground  source={image} style={styles.image}>{auth ? <UserData /> : <LoginForm />}</ImageBackground >;
}
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  }
})