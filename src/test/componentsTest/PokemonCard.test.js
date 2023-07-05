import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import PokemonCard from "../../components/PokemonCard";
import { useNavigation } from "@react-navigation/native";

// Mock de la función useNavigation
jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

describe("PokemonCard", () => {
  it("navega a la pantalla de Pokemon al presionar la tarjeta", () => {
    const navigationMock = {
      navigate: jest.fn(),
    };
    useNavigation.mockReturnValue(navigationMock);

    const pokemon = {
      id: 1,
      name: "Pikachu",
      order: 25,
      image: "https://example.com/pikachu.jpg",
      type: "Electric",
    };

    const { getByText } = render(<PokemonCard pokemon={pokemon} />);
    fireEvent.press(getByText("Pikachu"));

    // Verificar que la función 'navigate' de la navegación se llamó correctamente
    expect(navigationMock.navigate).toHaveBeenCalledWith("Pokemon", { id: 1 });
  });
});