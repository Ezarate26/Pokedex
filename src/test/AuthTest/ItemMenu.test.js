import React from "react";
import { render } from "@testing-library/react-native";
import ItemMenu from "../../components/Auth/ItemMenu";

describe("ItemMenu", () => {
  test("renderiza correctamente el título y el texto", () => {
    const title = "Título";
    const text = "Texto de ejemplo";
    const { getByTestId } = render(<ItemMenu title={title} text={text} />);
  
    // Verificar que se renderiza el título y el texto correctamente
    const titleElement = getByTestId("title");
    const textElement = getByTestId("text");
  
    expect(titleElement).toBeDefined();
    expect(textElement).toBeDefined();
  });
});