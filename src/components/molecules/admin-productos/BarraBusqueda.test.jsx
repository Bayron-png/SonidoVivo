import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BarraBusqueda from "./BarraBusqueda";

let setBusqueda;

// Se ejecuta antes de cada prueba
beforeEach(() => {
  setBusqueda = vi.fn(); // Reinicia la función simulada
});

describe("Pruebas del componente BarraBusqueda", () => {
  it("1. Actualiza la búsqueda al escribir texto", () => {
    render(<BarraBusqueda busqueda="" setBusqueda={setBusqueda} />);

    const campo = screen.getByPlaceholderText(
      "Buscar por nombre o categoría...",
    );

    // Simula escribir en la barra de búsqueda
    fireEvent.change(campo, {
      target: { value: "Guitarra" },
    });

    expect(setBusqueda).toHaveBeenCalledWith("Guitarra");
  });

  it("2. Limpia la búsqueda al presionar el botón", () => {
    render(<BarraBusqueda busqueda="Guitarra" setBusqueda={setBusqueda} />);

    // Simula clickear el botón limpiar
    fireEvent.click(screen.getByRole("button", { name: "Limpiar" }));

    expect(setBusqueda).toHaveBeenCalledWith("");
  });
});
