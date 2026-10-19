import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import ResumenDashboard from "../organisms/admin/ResumenDashboard";

function AdminDashboardTemplate() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="container flex-grow-1 py-5 admin-dashboard">
        <header className="mb-5">
          <h2 className="fw-bold">
            Panel de administración
          </h2>

          <p className="text-muted">
            Gestiona los productos y consulta los movimientos
            de Sonido Vivo.
          </p>
        </header>

        <ResumenDashboard />
      </main>

      <Footer />
    </div>
  );
}

export default AdminDashboardTemplate;