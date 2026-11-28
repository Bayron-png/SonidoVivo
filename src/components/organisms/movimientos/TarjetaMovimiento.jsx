import MovimientoFecha from "../../atoms/movimientos/MovimientoFecha";
import MovimientoTipoEnvio from "../../atoms/movimientos/MovimientoTipoEnvio";
import MovimientoProducto from "../../molecules/movimientos/MovimientoProducto";
import ResumenMovimiento from "../../molecules/movimientos/ResumenMovimiento";
import { usePedidoDetalle } from "../../../hooks/usePedidoDetalle";
import { useEffect, useState } from "react";

const estadosPedido = [
  "Pendiente",
  "Confirmado",
  "Enviado",
  "Entregado",
  "Cancelado"
];

const normalizarEstado = (estado) => {
  if (typeof estado !== "string") return "";

  return estadosPedido.find(
    (opcion) => opcion.toLocaleLowerCase("es-CL") === estado.trim().toLocaleLowerCase("es-CL")
  ) ?? estado;
};

const TarjetaMovimiento = ({ movimiento: pedido, actualizarEstadoPedido }) => {
  const estadoActual = normalizarEstado(pedido.estado);
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("");
  const [guardandoEstado, setGuardandoEstado] = useState(false);
  const [errorEstado, setErrorEstado] = useState("");

  useEffect(() => {
    setEstadoSeleccionado("");
  }, [pedido.estado]);

  const {
    detalle,
    mostrando,
    cargando,
    error,
    alternarDetalle
  } = usePedidoDetalle(pedido.id);

  const subtotal = Number(pedido.total) - Number(pedido.costo_envio);

  const guardarEstado = async (event) => {
    event.preventDefault();
    if (guardandoEstado || !estadoSeleccionado) return;

    setGuardandoEstado(true);
    setErrorEstado("");

    try {
      await actualizarEstadoPedido(pedido.id, estadoSeleccionado);
    } catch (error) {
      setErrorEstado(
        error.response?.data?.error ||
        "No se pudo actualizar el estado del pedido."
      );
    } finally {
      setGuardandoEstado(false);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title mb-0">
            Pedido #{pedido.id}
          </h5>

          <span className="badge bg-secondary">{estadoActual}</span>
        </div>

        <p className="mb-1">
          <strong>Cliente: </strong>{pedido.cliente_nombre}
        </p>
        <p className="mb-2 text-muted">{pedido.cliente_correo}</p>
        <MovimientoFecha
          fecha={new Date(pedido.creado_en).toLocaleString("es-CL")}
        />

        <hr />

        <ResumenMovimiento
          subtotal={subtotal}
          costoEnvio={Number(pedido.costo_envio)}
          total={Number(pedido.total)}
        />

        <MovimientoTipoEnvio
          tipoEnvio={pedido.tipo_envio}
        />

        <form className="mt-3" onSubmit={guardarEstado}>
            <label
              className="form-label fw-semibold"
              htmlFor={`estado-pedido-${pedido.id}`}
            >
              Cambiar estado
            </label>
            <div className="d-flex flex-column flex-sm-row gap-2">
              <select
                id={`estado-pedido-${pedido.id}`}
                className="form-select"
                value={estadoSeleccionado}
                onChange={(event) => setEstadoSeleccionado(event.target.value)}
                disabled={guardandoEstado}
                required
              >
                <option value="">Selecciona un estado</option>
                {estadosPedido.map((estado) => (
                  <option key={estado} value={estado}>
                    {estado}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="btn btn-primary text-nowrap"
                disabled={guardandoEstado || !estadoSeleccionado}
              >
                {guardandoEstado ? "Guardando..." : "Guardar estado"}
              </button>
            </div>
            {errorEstado && (
              <p className="alert alert-danger mt-2 mb-0" role="alert">
                {errorEstado}
              </p>
            )}
        </form>

        <button
          type="button"
          className="btn btn-outline-primary btn-sm mt-3"
          onClick={alternarDetalle}
          aria-expanded={mostrando}
        >
          {mostrando ? "Ocultar productos" : "Ver productos"}
        </button>

        {mostrando && (
          <section className="border-top mt-3 pt-3" aria-label={`Productos del pedido ${pedido.id}`}>
            {cargando && <p role="status">Cargando productos...</p>}
            {error && <p className="alert alert-danger" role="alert">{error}</p>}
            {detalle && (
              <ul className="list-group">
                {detalle.detalles.map((item) => (
                  <MovimientoProducto
                    key={item.productoId}
                    producto={{
                      id: item.productoId,
                      nombre: item.productoId,
                      precio: Number(item.precioUnitario),
                      cantidad: item.cantidad
                    }}
                  />
                ))}
              </ul>
            )}
          </section>
        )}

      </div>
    </div>
  );
};

export default TarjetaMovimiento;