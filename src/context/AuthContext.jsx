import { createContext, useContext, useEffect, useState } from "react";
import api, { SESION_KEY } from "../services/api";

const AuthContext = createContext(null);

const obtenerExpiracion = (token) => {
  try {
    const parte = token.split(".")[1];

    const base64 = parte
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const payload = JSON.parse(atob(base64));

    return typeof payload.exp === "number"
      ? payload.exp * 1000
      : 0;
  } catch {
    return 0;
  }
};

const recuperarSesion = () => {
  try {
    const guardado = sessionStorage.getItem(SESION_KEY);
    const sesion = guardado ? JSON.parse(guardado) : null;

    if (
      sesion?.token &&
      sesion?.usuario &&
      obtenerExpiracion(sesion.token) > Date.now()
    ) {
      return sesion;
    }
  } catch {
    // Descartar sesiones inválidas.
  }

  sessionStorage.removeItem(SESION_KEY);
  return null;
};

function AuthProvider({ children }) {
  const [sesion, setSesion] = useState(recuperarSesion);

  const usuario = sesion?.usuario ?? null;

  const iniciarSesion = async (correo, password) => {
    const { data } = await api.post("/auth/login", {
      correo: correo.trim().toLowerCase(),
      password,
    });

    if (
      !data.token ||
      !data.usuario?.rol ||
      obtenerExpiracion(data.token) <= Date.now()
    ) {
      throw new Error("Respuesta de autenticación inválida");
    }

    const nuevaSesion = {
      token: data.token,
      usuario: {
        ...data.usuario,
        rol: data.usuario.rol.toLowerCase(),
      },
    };

    sessionStorage.setItem(
      SESION_KEY,
      JSON.stringify(nuevaSesion)
    );

    setSesion(nuevaSesion);

    return nuevaSesion.usuario;
  };

  const cerrarSesion = () => {
    sessionStorage.removeItem(SESION_KEY);
    setSesion(null);
  };

  useEffect(() => {
    if (!sesion) return;

    const tiempoRestante =
      obtenerExpiracion(sesion.token) - Date.now();

    if (tiempoRestante <= 0) {
      sessionStorage.removeItem(SESION_KEY);
      setSesion(null);
      return;
    }

    const temporizador = setTimeout(() => {
      sessionStorage.removeItem(SESION_KEY);
      setSesion(null);
    }, tiempoRestante);

    return () => clearTimeout(temporizador);
  }, [sesion]);

  return (
    <AuthContext.Provider
      value={{ usuario, iniciarSesion, cerrarSesion }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;