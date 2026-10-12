import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";

const CarritoTemplate = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      {/* Contenido dinámico que cambia según la pantalla */}
      <main className="flex-grow-1 container pt-5 mb-4">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Carrito de Compras
        </h1>
        <p className="text-gray-600">
          Aquí se mostrarán los productos agregados.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default CarritoTemplate;
