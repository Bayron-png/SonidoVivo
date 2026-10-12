import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const HomeTemplate = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="container flex-grow-1 py-5">
        <section aria-labelledby="titulo-home">
          <h2 id="titulo-home" className="text-center">
            Bienvenido a Sonido Vivo
          </h2>

          <p className="text-center">
            Tu tienda de instrumentos musicales y equipos de sonido.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomeTemplate;
