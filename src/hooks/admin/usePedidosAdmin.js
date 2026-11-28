import { useCallback, useEffect, useState } from "react";
import {
  cambiarEstadoPedido,
  obtenerPedidosAdmin
} from "../../services/pedidos";

export function usePedidosAdmin() {
  const [pedidos, setPedidos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  const cargarPedidos = useCallback(async () => {
    setCargando(true);
    setError("");

    try {
      const resultado = await obtenerPedidosAdmin();
      setPedidos(resultado);
    } catch (error) {
      setError(
        error.response?.data?.error ||
        "No se pudieron cargar los pedidos."
      );
    } finally {
      setCargando(false);
    }
  }, []);

  const actualizarEstadoPedido = useCallback(async (id, estado) => {
    const pedidoActualizado = await cambiarEstadoPedido(id, estado);
    setPedidos((pedidosActuales) =>
      pedidosActuales.map((pedido) =>
        pedido.id === id
          ? { ...pedido, ...pedidoActualizado }
          : pedido
      )
    );
    return pedidoActualizado;
  }, []);

  useEffect(() => {
    cargarPedidos();
  }, [cargarPedidos]);

  return {
    pedidos,
    cargando,
    error,
    cargarPedidos,
    actualizarEstadoPedido
  };
}
