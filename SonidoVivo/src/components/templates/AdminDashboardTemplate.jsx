import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import BotonVolver from "../atoms/botones/BotonVolver";
import TituloRedondeado from "../atoms/TituloRedondeado";
import ResumenDashboard from "../organisms/admin/ResumenDashboard";
import Descripcion from "../atoms/Descripcion";

function AdminDashboardTemplate() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="container flex-grow-1 pt-5 mb-4">
        <BotonVolver label="← Volver al menú" ruta="/" />

        <TituloRedondeado texto="Administración" />

        <Descripcion texto = "Gestiona los productos y consulta los movimientos de Sonido Vivo."/>

        <ResumenDashboard />
      </main>

      <Footer />
    </div>
  );
}

export default AdminDashboardTemplate;
