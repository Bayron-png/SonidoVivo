import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

import {
  listarUsuarios,
  crearUsuario,
  actualizarUsuario,
  desactivarUsuario,
  activarUsuario
} from "../../services/usuarios";

export function useGestionUsuarios() {
  const { usuario: usuarioActual } = useAuth();

  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEditando, setUsuarioEditando] = useState(null);

  const [cargando, setCargando] = useState(true);
  const [procesando, setProcesando] = useState(false);

  const [error, setError] = useState("");
  const [errorAccion, setErrorAccion] = useState("");
  const [mensaje, setMensaje] = useState("");

  const cargarUsuarios = useCallback(async () => {
    setCargando(true);
    setError("");

    try {
      const resultado = await listarUsuarios();
      setUsuarios(resultado);
    } catch (error) {
      setError(
        error.response?.data?.error ||
        "No se pudieron cargar los usuarios."
      );
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargarUsuarios();
  }, [cargarUsuarios]);

  const ejecutarAccion = async (operacion, mensajeExito) => {
    if (procesando) return false;

    setProcesando(true);
    setErrorAccion("");
    setMensaje("");

    try {
      await operacion();
      await cargarUsuarios();

      setMensaje(mensajeExito);
      return true;
    } catch (error) {
      setErrorAccion(
        error.response?.data?.error ||
        "No se pudo completar la operación."
      );
      return false;
    } finally {
      setProcesando(false);
    }
  };

  const guardarUsuario = async (datos) => {
    const editando = usuarioEditando;

    const exito = await ejecutarAccion(
      () =>
        editando
          ? actualizarUsuario(editando.id, datos)
          : crearUsuario(datos),
      editando
        ? "Usuario actualizado correctamente."
        : "Usuario creado correctamente."
    );

    if (exito) {
      setUsuarioEditando(null);
    }

    return exito;
  };

  const desactivar = async (id) => {
    if (Number(id) === Number(usuarioActual?.id)) {
      setErrorAccion("No puedes desactivar tu propia cuenta.");
      return false;
    }

    return ejecutarAccion(
      () => desactivarUsuario(id),
      "Usuario desactivado correctamente."
    );
  };

  const activar = async (id) => {
    return ejecutarAccion(
      () => activarUsuario(id),
      "Usuario activado correctamente."
    );
  };

  return {
    usuarios,
    usuarioEditando,
    usuarioActualId: usuarioActual?.id,

    cargando,
    procesando,
    error,
    errorAccion,
    mensaje,

    cargarUsuarios,
    guardarUsuario,
    desactivar,
    activar,

    seleccionarUsuario: setUsuarioEditando,
    cancelarEdicion: () => setUsuarioEditando(null)
  };
}