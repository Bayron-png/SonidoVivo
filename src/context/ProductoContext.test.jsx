import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import api from "../services/api";
import { ProductProvider, useProductos } from "./ProductoContext";

vi.mock("../services/api", () => ({
  default: {
    get: vi.fn(),
  },
}));

const ErrorProducto = () => {
  const { error } = useProductos();
  return <p role="alert">{error}</p>;
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
});
