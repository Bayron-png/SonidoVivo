import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import BotonVolver from "../atoms/botones/BotonVolver";
import TituloRedondeado from "../atoms/TituloRedondeado";
import ListaMovimientos from "../organisms/movimientos/ListaMovimientos";
import MensajeSinMovimientos from "../atoms/movimientos/MensajeSinMovimientos";

const MovimientosTemplate = ({ movimientos }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1 container pt-5 mb-4">
        <BotonVolver label="← Volver a administración" ruta="/admin" />

        <TituloRedondeado texto="Movimientos" />

        {movimientos.length === 0 ? (
          <MensajeSinMovimientos />
        ) : (
          <ListaMovimientos movimientos={movimientos} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MovimientosTemplate;
