import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import VendedorDashboardTemplate from "./VendedorDashboardTemplate";

vi.mock("../organisms/movimientos/ListaMovimientos", () => ({
  default: () => <div>Lista de pedidos</div>,
}));

const crearProps = () => ({
  categorias: [{ id: 1, titulo: "Guitarras", slug: "guitarras" }],
  categoriaSeleccionada: "",
  seleccionarCategoria: vi.fn(),
  productos: [
    { id: "GTR1", nombre: "Guitarra", categoria: "Guitarras", stock: 3 },
  ],
  cargandoProductos: false,
  errorProductos: "",
  cargarProductos: vi.fn(),
  ajustarStock: vi.fn(),
  ajustesPendientes: new Set(),
  erroresStock: {},
  pedidos: [{ id: 1 }],
  cargandoPedidos: false,
  errorPedidos: "",
  cargarPedidos: vi.fn(),
  actualizarEstadoPedido: vi.fn(),
});

describe("VendedorDashboardTemplate", () => {
  it("alterna entre productos y pedidos mostrando solo la vista seleccionada", () => {
    render(<VendedorDashboardTemplate {...crearProps()} />);

    expect(
      screen.getByRole("heading", { name: "Categorías" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Productos y stock" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Historial de pedidos" }),
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Pedidos" }));

    expect(
      screen.queryByRole("heading", { name: "Categorías" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Productos y stock" }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Historial de pedidos" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Lista de pedidos")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Categorías" }));

    expect(
      screen.getByRole("heading", { name: "Productos y stock" }),
    ).toBeInTheDocument();
    expect(screen.queryByText("Lista de pedidos")).not.toBeInTheDocument();
  });
});
