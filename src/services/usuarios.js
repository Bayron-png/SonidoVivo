import api from "./api";

export const listarUsuarios = async () => {
    const response = await api.get("/usuarios");
    return response.data;
};

export const obtenerUsuario = async (id) => {
    const response = await api.get(`/usuarios/${id}`);
    return response.data;
};

export const crearUsuario = async (datos) => {
    const response = await api.post("/usuarios", datos);
    return response.data;
};

export const actualizarUsuario = async (id, datos) => {
    const response = await api.put(`/usuarios/${id}`, datos);
    return response.data;
};

export const desactivarUsuario = async (id) => {
    const response = await api.delete(`/usuarios/${id}`);
    return response.data;
};

export const activarUsuario = async (id) => {
    const response = await api.patch(`/usuarios/${id}/activar`);
    return response.data;
};