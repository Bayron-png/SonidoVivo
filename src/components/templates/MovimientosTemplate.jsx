import TituloRedondeado from "../atoms/TituloRedondeado";
import ListaMovimientos from "../organisms/movimientos/ListaMovimientos";
import MensajeSinMovimientos from "../atoms/movimientos/MensajeSinMovimientos";

function MovimientosTemplate({ movimientos }) {
  return (
    <section aria-label="Historial de movimientos">
      <header className="mb-4">
        <TituloRedondeado texto="Movimientos" />
      </header>

      {movimientos.length === 0 ? (
        <MensajeSinMovimientos />
      ) : (
        <ListaMovimientos movimientos={movimientos} />
      )}
    </section>
  );
}

export default MovimientosTemplate;