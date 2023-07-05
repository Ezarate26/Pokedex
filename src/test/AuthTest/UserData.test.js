import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { useFocusEffect } from "@react-navigation/native";
import useAuth from "../../hooks/useAuth";
import UserData from "../../components/Auth/UserData";
jest.mock('@react-native-async-storage/async-storage', () => require('@react-native-async-storage/async-storage/jest/async-storage-mock') )


jest.mock("../../hooks/useAuth", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("@react-navigation/native", () => ({
  useFocusEffect: jest.fn(),
}));

describe("UserData", () => {
  beforeEach(() => {
    useAuth.mockReturnValue({
      auth: {
        firstName: "Emmanuel",
        lastName: "Zarate",
        username: "ezarate",
        email: "ezarate2699@gmail.com",
      },
      logout: jest.fn(),
    });
  });

  it("Renderiza correctamente los datos del usuario", () => {
    useFocusEffect.mockImplementationOnce((callback) => callback());
    const { getByTestId } = render(<UserData />);
    const userData = getByTestId("user-data")
    expect(userData).toBeDefined()
  });

  it("Se llama funcion logout cuando se presiona el texto 'Desconectarse'", () => {
    useFocusEffect.mockImplementationOnce((callback) => callback());

    const { getByText } = render(<UserData />);
    const logoutButton = getByText("Desconectarse");
    fireEvent.press(logoutButton);

    expect(useAuth().logout).toHaveBeenCalled();
  });
})

