import { Outlet } from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import MenuAdmin from "../organisms/admin/MenuAdmin";

function AdminLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="container flex-grow-1 py-4">
        <MenuAdmin />

        <main className="admin-dashboard mt-4">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AdminLayout;