import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoriteScreen from "../screen/FavoriteScreen";
import PokemonScreen from "../screen/PokemonScreen";

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoriteStack"
        component={FavoriteScreen}
        options={{
          title: "Favoritos",
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
