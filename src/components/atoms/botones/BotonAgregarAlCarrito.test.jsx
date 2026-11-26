import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BotonAgregarAlCarrito from "./BotonAgregarAlCarrito";

// Función Simulada
const { agregarAlCarritoMock } = vi.hoisted(() => ({
  agregarAlCarritoMock: vi.fn(), // Registra cuantas veces se llama y que parámetros recibe
}));

// Simular el contexto del carrito sin depender del estado real
vi.mock("../../../context/CarritoContext", () => ({
  useCart: () => ({
    agregarAlCarrito: agregarAlCarritoMock,
  }),
}));

describe("Pruebas del componente BotonAgregarAlCarrito", () => {
  it("1. Agrega el producto al carrito al presionar el botón", () => {
    render(<BotonAgregarAlCarrito productoId="AC009" disponible={true} />);

    fireEvent.click(screen.getByRole("button", { name: "Agregar al carrito" }));

    expect(agregarAlCarritoMock).toHaveBeenCalledWith("AC009");
  });

  it("2. Deshabilita el botón cuando el producto no está disponible", () => {
    render(<BotonAgregarAlCarrito productoId="AC009" disponible={false} />);

    const boton = screen.getByRole("button", { name: "Agotado" });

    expect(boton).toBeDisabled();
  });
});
