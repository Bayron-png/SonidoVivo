import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import api from "../services/api";
import { ProductProvider, useProductos } from "./ProductoContext";

vi.mock("../services/api", () => ({
  default: {
    get: vi.fn(),
    patch: vi.fn(),
  },
}));

const ErrorProducto = () => {
  const { error } = useProductos();
  return <p role="alert">{error}</p>;
};

const AjustadorStock = () => {
  const { productosTodos, ajustarStock } = useProductos();
  const producto = productosTodos[0];

  if (!producto) return null;

  return (
    <>
      <button onClick={() => ajustarStock(producto.id, 1)}>
        Aumentar stock
      </button>
      <p>Stock: {producto.stock}</p>
    </>
  );
};

describe("ProductProvider", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("muestra un mensaje entendible cuando se agota el tiempo de espera", async () => {
    api.get.mockRejectedValueOnce({
      code: "ECONNABORTED",
      message: "timeout of 10000ms exceeded",
    });

    render(
      <ProductProvider>
        <ErrorProducto />
      </ProductProvider>,
    );

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent(
        "Error: no se pudieron cargar los productos",
      );
    });
  });

  it("conserva el mensaje original para otros errores", async () => {
    api.get.mockRejectedValueOnce(new Error("Error de conexión"));

    render(
      <ProductProvider>
        <ErrorProducto />
      </ProductProvider>,
    );

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent("Error de conexión");
    });
  });

  it("persiste el ajuste de stock antes de actualizar el producto local", async () => {
    api.get.mockResolvedValueOnce({
      data: [{ id: "GTR1", nombre: "Guitarra", stock: 2 }],
    });
    api.patch.mockResolvedValueOnce({ data: {} });

    render(
      <ProductProvider>
        <AjustadorStock />
      </ProductProvider>,
    );

    fireEvent.click(await screen.findByRole("button", { name: "Aumentar stock" }));

    await waitFor(() => {
      expect(api.patch).toHaveBeenCalledWith(
        "/catalogo/GTR1/stock",
        { stock: 3 },
      );
      expect(screen.getByText("Stock: 3")).toBeInTheDocument();
    });
  });
});
