import TituloRedondeado from "../atoms/TituloRedondeado";
import ListaMovimientos from "../organisms/movimientos/ListaMovimientos";
import MensajeSinMovimientos from "../atoms/movimientos/MensajeSinMovimientos";
import EstadoConsulta from "../molecules/estados/EstadoConsulta";

function MovimientosTemplate({
  movimientos,
  cargando,
  error,
  cargarPedidos,
  actualizarEstadoPedido
}) {
  return (
    <section aria-label="Historial de movimientos">
      <header className="mb-4">
        <TituloRedondeado texto="Movimientos" />
      </header>

      <EstadoConsulta
        cargando={cargando}
        error={error}
        onReintentar={cargarPedidos}
        mensajeCarga="Cargando pedidos..."
      />

      {!cargando && !error && movimientos.length === 0 && (
        <MensajeSinMovimientos />
      )}

      {!cargando && !error && movimientos.length > 0 && (
        <ListaMovimientos
          movimientos={movimientos}
          actualizarEstadoPedido={actualizarEstadoPedido}
        />
      )}
    </section>
  );
}

export default MovimientosTemplate;