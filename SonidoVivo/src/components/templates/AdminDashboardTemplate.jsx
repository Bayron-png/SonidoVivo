import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import BotonVolver from "../atoms/botones/BotonVolver";
import TituloRedondeado from "../atoms/TituloRedondeado";
import ResumenDashboard from "../organisms/admin/ResumenDashboard";

function AdminDashboardTemplate() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="container flex-grow-1 pt-5 mb-4">
        <BotonVolver label="← Volver al menú" ruta="/" />

        <TituloRedondeado texto="Administración" />

        <p className="text-muted">
          Gestiona los productos y consulta los movimientos de Sonido Vivo.
        </p>

        <ResumenDashboard />
      </main>

      <Footer />
    </div>
  );
}

export default AdminDashboardTemplate;
