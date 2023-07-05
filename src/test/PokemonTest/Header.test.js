import React from "react";
import { render } from "@testing-library/react-native";
import Header from "../../components/Pokemon/Header";

describe("Header", () => {
  it("Renderiza correctamente el componente Header con las props correctas", () => {
    const name = "Pikachu";
    const order = 25;
    const image = "https://example.com/pikachu.png";
    const type = "electric";

    const { getByText, getByTestId } = render(
      <Header name={name} order={order} image={image} type={type} />
    );

    // Verificar que el nombre se muestre correctamente
    const nameText = getByText("Pikachu");
    expect(nameText).toBeDefined();

    // Verificar que el numero de pokemon se muestre correctamente
    const orderText = getByText("#025");
    expect(orderText).toBeDefined();

    // Verificar que la imagen se muestre correctamente
    const imageComponent = getByTestId("pokemon-image");
    expect(imageComponent.props.source.uri).toEqual("https://example.com/pikachu.png");
  });
});