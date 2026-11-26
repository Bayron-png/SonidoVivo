import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

function HeaderAdmin() {
  const { usuario } = useAuth();

  return (
    <header className="admin-header text-white">
      <div className="container py-3">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">

          <Link
            to="/admin"
            className="d-inline-flex align-items-center gap-3 text-white text-decoration-none"
            aria-label="Ir al dashboard administrativo"
          >
            <img
              src="/logo.png"
              alt="Logo SonidoVivo"
              width="52"
              height="52"
              style={{ objectFit: "contain" }}
            />

            <span className="d-flex flex-column">
              <span className="fs-4 fw-bold">
                SonidoVivo
              </span>

              <span className="small">
                Panel de administración
              </span>
            </span>
          </Link>

          <div className="text-center text-md-end">
            <p className="fw-semibold mb-1">
              Administrador
            </p>

            <p className="admin-header-correo mb-0 small">
              {usuario?.correo}
            </p>
          </div>

        </div>
      </div>
    </header>
  );
}

export default HeaderAdmin;