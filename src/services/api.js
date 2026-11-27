import axios from "axios";

export const SESION_KEY = "sonidovivo_sesion";

const api = axios.create({
  baseURL: "/api/v1",
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  try {
    const guardado = sessionStorage.getItem(SESION_KEY);
    const sesion = guardado ? JSON.parse(guardado) : null;

    if (sesion?.token) {
      config.headers.Authorization = `Bearer ${sesion.token}`;
    }
  } catch {
    sessionStorage.removeItem(SESION_KEY);
  }

  return config;
});

export default api;