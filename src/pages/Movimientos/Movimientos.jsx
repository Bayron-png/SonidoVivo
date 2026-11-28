import MovimientosTemplate from "../../components/templates/MovimientosTemplate";
import { usePedidosAdmin } from "../../hooks/admin/usePedidosAdmin";

const Movimientos = () => {
  const {
    pedidos,
    cargando,
    error,
    cargarPedidos,
    actualizarEstadoPedido
  } = usePedidosAdmin();

  return (
    <MovimientosTemplate
      movimientos={pedidos}
      cargando={cargando}
      error={error}
      cargarPedidos={cargarPedidos}
      actualizarEstadoPedido={actualizarEstadoPedido}
    />
  );
};

export default Movimientos;