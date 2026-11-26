import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Descripcion from "./Descripcion";

describe("Pruebas del componente Descripcion", () => {
  it("1. Muestra el texto proporcionado por el prop", () => {
    render(<Descripcion texto="Descripción de prueba" />);

    expect(screen.getByText("Descripción de prueba")).toBeInTheDocument();
  });
});
