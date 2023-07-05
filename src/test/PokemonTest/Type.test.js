import React from "react";
import { render } from "@testing-library/react-native";
import Type from "../../components/Pokemon/Type";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

jest.mock("../../utils/getColorByPokemonType", () => {
  return jest.fn().mockReturnValue("#ff0000");
});

describe("Type", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renderiza correctamente el componente Type con las props correctas", () => {
    const types = [
      { type: { name: "Grass" } },
      { type: { name: "Fire" } },
      { type: { name: "Water" } },
    ];

    const { getAllByTestId } = render(<Type types={types} />);

    const typeNames = getAllByTestId("type-name");

    expect(typeNames).toHaveLength(types.length);

    types.forEach((type, index) => {
      expect(typeNames[index].props.children).toBe(type.type.name);
    });

    expect(getColorByPokemonType).toHaveBeenCalledTimes(types.length);
    types.forEach((type, index) => {
      expect(getColorByPokemonType).toHaveBeenNthCalledWith(index + 1, type.type.name);
    });
  });
});