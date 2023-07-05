import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import NoLogged from "../../components/NoLogged";
import { useNavigation } from "@react-navigation/native";

jest.mock("@react-navigation/native");

describe("NoLogged", () => {
  it("Renderiza correctamente", () => {
    const { getByText } = render(<NoLogged />);
    
    const textElement = getByText("Para ver esta pantalla debes iniciar sesión");
    expect(textElement).toBeTruthy();
  });

  it("Navega hacia la pantalla de login cuando se presiona el boton con texto Login", () => {
    const navigateMock = jest.fn();
    useNavigation.mockReturnValue({ navigate: navigateMock });
    
    const { getByText } = render(<NoLogged />);
    
    const buttonElement = getByText("Login");
    fireEvent.press(buttonElement);
    
    expect(navigateMock).toHaveBeenCalledWith("Account");
  });
});