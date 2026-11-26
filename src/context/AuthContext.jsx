import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const usuariosDemo = [
  {
    correo: "admin@sonidovivo.cl",
    password: "Admin1234!",
    rol: "administrador"
  },
  {
    correo: "sonidovivo@gmail.com",
    password: "1234567A",
    rol: "cliente"
  }
];

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => {
    try {
      const guardado = sessionStorage.getItem("sonidovivo_usuario");
      return guardado ? JSON.parse(guardado) : null;
    } catch {
      return null;
    }
  });

  const iniciarSesion = (correo, password) => {
    const encontrado = usuariosDemo.find(
      (u) =>
        u.correo === correo.trim().toLowerCase() &&
        u.password === password
    );

    if (!encontrado) {
      return null;
    }

    const usuarioAutenticado = {
      correo: encontrado.correo,
      rol: encontrado.rol
    };

    setUsuario(usuarioAutenticado);

    sessionStorage.setItem(
      "sonidovivo_usuario",
      JSON.stringify(usuarioAutenticado)
    );

    return usuarioAutenticado;
  };

  const cerrarSesion = () => {
    setUsuario(null);
    sessionStorage.removeItem("sonidovivo_usuario");
  };

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