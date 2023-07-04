import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Image } from "react-native";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          headerShown: false,
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          headerShown: false,
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{
        width: 75,
        height: 75,
        top: -15,
      }}
    />
  );
}
