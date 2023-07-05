import React from "react";
import { render } from "@testing-library/react-native";
import Stats from "../../components/Pokemon/Stats";

describe("Stats", () => {
  it("Renderiza correctamente el componente Stats con las props correctas", () => {
    const stats = [
      { stat: { name: "hp" }, base_stat: 80 },
      { stat: { name: "attack" }, base_stat: 120 },
      { stat: { name: "defense" }, base_stat: 70 },
    ];

    const { getByText, getAllByTestId } = render(<Stats stats={stats} />);

    // Verificar que el título se muestre correctamente
    const title = getByText("Base Stats");
    expect(title).toBeDefined();

    // Verificar que los nombres y valores de las estadísticas se muestren correctamente
    const statNames = ["Hp", "Attack", "Defense"];
    const statValues = [80, 120, 70];
    const statNameElements = getAllByTestId("stat-name");
    const statValueElements = getAllByTestId("stat-value");

    statNameElements.forEach((element, index) => {
      expect(element.props.children).toEqual(statNames[index]);
    });

    statValueElements.forEach((element, index) => {
      expect(element.props.children).toEqual(statValues[index]);
    });
  });
});