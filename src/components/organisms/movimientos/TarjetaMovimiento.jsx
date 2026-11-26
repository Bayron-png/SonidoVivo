import MovimientoFecha from "../../atoms/movimientos/MovimientoFecha";
import MovimientoTipoEnvio from "../../atoms/movimientos/MovimientoTipoEnvio";
import MovimientoProducto from "../../molecules/movimientos/MovimientoProducto";
import ResumenMovimiento from "../../molecules/movimientos/ResumenMovimiento";

const TarjetaMovimiento = ({ movimiento }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title mb-0">
            Pedido #{movimiento.id}
          </h5>

          <MovimientoFecha fecha={movimiento.fecha} />
        </div>

        <hr />

        <h6>Productos</h6>

        <ul className="list-group mb-3">
          {movimiento.productos.map((producto) => (
            <MovimientoProducto
              key={producto.id}
              producto={producto}
            />
          ))}
        </ul>

        <ResumenMovimiento
          subtotal={movimiento.subtotal}
          costoEnvio={movimiento.costoEnvio}
          total={movimiento.total}
        />

        <MovimientoTipoEnvio
          tipoEnvio={movimiento.tipoEnvio}
        />

      </div>
    </div>
  );
};

export default TarjetaMovimiento;