import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import Favorite from "../../components/Pokemon/Favorite";
import { addPokemonFavoriteApi} from "../../api/pokemonFavorite";

jest.mock("../../api/pokemonFavorite", () => ({
    addPokemonFavoriteApi: jest.fn(),
}));

  
describe("Favorite", () => {
  it("Icono de favoritos se renderiza correctamente", () => {
        render(<Favorite id={1} />);
        
    });
  it("Agrega un Pokémon a favorites cuando presionas el icono de corazón", async () => {
    const id = 1;
    const { getByTestId } = render(<Favorite id={id} />);
    const heartIcon = getByTestId("heart-icon");

    await act(async () => {
      fireEvent.press(heartIcon);
      await Promise.resolve();
    });

    expect(addPokemonFavoriteApi).toHaveBeenCalledWith(id);
  });
    
});
