import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import ListaCarrito from "../organisms/ListaCarrito";
import BotonVolver from "../atoms/botones/BotonVolver";
import TituloRedondeado from "../atoms/TituloRedondeado";

const CarritoTemplate = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      {/* Contenido dinámico que cambia según la pantalla */}
      <main className="flex-grow-1 container pt-5 mb-4">
        <BotonVolver label = "← Ir al catálogo" ruta = "/" />
        <TituloRedondeado texto = "Carrito"/>
        <ListaCarrito />
      </main>
      <Footer />
    </div>
  );
};

export default CarritoTemplate;