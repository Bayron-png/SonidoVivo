import { useCallback, useEffect, useState } from "react";
import { obtenerMisPedidos } from "../services/pedidos";

export function useMisPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  const cargarPedidos = useCallback(async () => {
    setCargando(true);
    setError("");

    try {
      const resultado = await obtenerMisPedidos();
      setPedidos(resultado);
    } catch (error) {
      setError(
        error.response?.data?.error ||
        "No se pudieron cargar tus pedidos."
      );
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargarPedidos();
  }, [cargarPedidos]);

  return {
    pedidos,
    cargando,
    error,
    cargarPedidos
  };
}