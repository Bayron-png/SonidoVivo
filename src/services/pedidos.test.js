import { beforeEach, describe, expect, it, vi } from "vitest";
import api from "./api";
import { cambiarEstadoPedido, obtenerPedidosAdmin } from "./pedidos";

vi.mock("./api", () => ({
  default: {
    get: vi.fn(),
    patch: vi.fn(),
  },
}));

describe("obtenerPedidosAdmin", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("solicita al backend todos los pedidos del administrador", async () => {
    const pedidos = [{ id: 12, estado: "pendiente" }];
    api.get.mockResolvedValueOnce({ data: { pedidos } });

    await expect(obtenerPedidosAdmin()).resolves.toEqual(pedidos);
    expect(api.get).toHaveBeenCalledWith("/pedidos");
  });

  it("envía un estado permitido al backend y devuelve el pedido actualizado", async () => {
    const pedido = { id: 12, estado: "Confirmado" };
    api.patch.mockResolvedValueOnce({ data: { pedido } });

    await expect(cambiarEstadoPedido(12, "Confirmado")).resolves.toEqual(pedido);
    expect(api.patch).toHaveBeenCalledWith("/pedidos/12/estado", {
      estado: "Confirmado",
    });
  });
});
