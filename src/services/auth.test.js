import { beforeEach, describe, expect, it, vi } from "vitest";
import api from "./api";
import { registrarUsuario } from "./auth";

vi.mock("./api", () => ({
  default: {
    post: vi.fn(),
  },
}));

describe("registrarUsuario", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("envía el nombre completo, correo normalizado y contraseña al endpoint público", async () => {
    api.post.mockResolvedValueOnce({ data: { mensaje: "Usuario registrado" } });

    await registrarUsuario({
      nombre: "Ana",
      apellido: "Pérez",
      correo: " Ana@Ejemplo.cl ",
      password: "ClaveSegura1",
    });

    expect(api.post).toHaveBeenCalledWith("/auth/register", {
      nombre: "Ana Pérez",
      correo: "ana@ejemplo.cl",
      password: "ClaveSegura1",
    });
  });
});
