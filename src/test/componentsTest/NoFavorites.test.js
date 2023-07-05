import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import NoFavorites from "../../components/NoFavorites";
import { useNavigation } from "@react-navigation/native";

jest.mock("@react-navigation/native");

describe("NoFavorites", () => {
  it("Renderiza componente correctamente", () => {
    const { getByText } = render(<NoFavorites />);
    
    const textElement = getByText("No tienes favoritos");
    expect(textElement).toBeTruthy();
  });

  it("Navega al componente Pokedex cuando se presiona el boton Ir a Pokedex", () => {
    const navigateMock = jest.fn();
    useNavigation.mockReturnValue({ navigate: navigateMock });
    
    const { getByText } = render(<NoFavorites />);
    
    const buttonElement = getByText("Ir a Pokedex");
    fireEvent.press(buttonElement);
    
    expect(navigateMock).toHaveBeenCalledWith("Pokedex");
  });
});