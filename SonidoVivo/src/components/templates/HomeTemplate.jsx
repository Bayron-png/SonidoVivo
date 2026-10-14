import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import BannerNosotros from "../organisms/home/BannerNosotros";
import EventosDestacados from "../organisms/home/EventosDestacados";
import ProductosDestacados from "../organisms/home/ProductosDestacados";

const HomeTemplate = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="container flex-grow-1 py-4">
        <BannerNosotros />

       <EventosDestacados />

        <ProductosDestacados />
      </main>

      <Footer />
    </div>
  );
};

export default HomeTemplate;
