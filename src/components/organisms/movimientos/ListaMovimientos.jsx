import TarjetaMovimiento from "./TarjetaMovimiento";

const ListaMovimientos = ({ movimientos, actualizarEstadoPedido }) => {
  return (
    <div className="row g-4">
      {movimientos.map((movimiento) => (
        <div className="col-12" key={movimiento.id}>
          <TarjetaMovimiento
            movimiento={movimiento}
            actualizarEstadoPedido={actualizarEstadoPedido}
          />
        </div>
      ))}
    </div>
  );
};

export default ListaMovimientos;