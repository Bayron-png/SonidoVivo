import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

function MenuAdmin() {
  const navigate = useNavigate();
  const { cerrarSesion } = useAuth();

  const enlaces = [
    { ruta: "/admin", texto: "Dashboard", exacta: true },
    { ruta: "/admin/gestion-productos", texto: "Productos" },
    { ruta: "/admin/items-criticos", texto: "Ítems críticos" },
    { ruta: "/admin/movimientos", texto: "Movimientos" }
  ];

  const handleCerrarSesion = () => {
    cerrarSesion();
    navigate("/login", { replace: true });
  };

  return (
    <nav
      className="admin-menu"
      aria-label="Navegación del administrador"
    >
      <ul className="nav nav-pills gap-2 flex-wrap align-items-center">
        {enlaces.map((enlace) => (
          <li className="nav-item" key={enlace.ruta}>
            <NavLink
              to={enlace.ruta}
              end={enlace.exacta}
              className={({ isActive }) =>
                `nav-link admin-menu-enlace ${
                  isActive ? "activo" : ""
                }`
              }
            >
              {enlace.texto}
            </NavLink>
          </li>
        ))}

        <li className="nav-item ms-lg-auto">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleCerrarSesion}
          >
            Cerrar sesión
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default MenuAdmin;