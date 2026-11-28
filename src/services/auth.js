import api from "./api";

export const registrarUsuario = async ({ nombre, apellido, correo, password }) => {
  const nombreCompleto = [nombre, apellido]
    .map((parte) => parte.trim())
    .filter(Boolean)
    .join(" ");

  const response = await api.post("/auth/register", {
    nombre: nombreCompleto,
    correo: correo.trim().toLowerCase(),
    password,
  });

  return response.data;
};
