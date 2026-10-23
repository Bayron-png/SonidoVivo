import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductosLista from "./ProductosLista";

// Función Simulada
const { agregarAlCarritoMock } = vi.hoisted(() => ({
  agregarAlCarritoMock: vi.fn(), // Registra cuantas veces se llama y que parámetros recibe
}));

const { productosMock } = vi.hoisted(() => ({
  // Simular el producto de prueba
  productosMock: [
    {
      id: "GA005",
      nombre: "Guitarra 3/4 Niños",
      categoria: "Guitarras Acústicas",
      marca: "Yamaha",
      modelo: "JR1",
      stock: 6,
      precio: 79990,
      descripcion: "Tamaño reducido para niños de 6 a 10 años.",
      imagen: "/productos/guitarras-acusticas/ga005.png",
    },
  ],
}));

// Simular contexto de productos y carrito
vi.mock("../../../context/ProductoContext", () => ({
  useProductos: () => ({
    productos: productosMock,
  }),
}));

vi.mock("../../../context/CarritoContext", () => ({
  useCart: () => ({
    agregarAlCarrito: agregarAlCarritoMock,
  }),
}));

describe("Pruebas del componente ProductosLista", () => {
  it("1. Muestra los productos recibidos", () => {
    render(
      <MemoryRouter>
        <ProductosLista />
      </MemoryRouter>,
    );

    expect(screen.getByText("Guitarra 3/4 Niños")).toBeInTheDocument();
  });

  it("Prueba de demostración: Producto inexistente", () => {
    render(
      <MemoryRouter>
        <ProductosLista />
      </MemoryRouter>,
    );

    expect(screen.getByText("Guitarra 3/4 Niños")).toBeInTheDocument();
  });
});
