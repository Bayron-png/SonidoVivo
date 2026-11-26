import { Outlet } from "react-router-dom";

import HeaderAdmin from "../organisms/admin/HeaderAdmin";
import MenuAdmin from "../organisms/admin/MenuAdmin";

function AdminLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <HeaderAdmin />

      <div className="container flex-grow-1 py-4">
        <MenuAdmin />

        <main className="admin-dashboard mt-4">
          <Outlet />
        </main>
      </div>

      <footer className="admin-footer py-3">
        <div className="container text-center">
          <p className="text-muted small mb-0">
            SonidoVivo — Sistema de administración
          </p>
        </div>
      </footer>
    </div>
  );
}

export default AdminLayout;