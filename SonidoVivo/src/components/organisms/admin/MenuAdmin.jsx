import { NavLink } from "react-router-dom";

function MenuAdmin() {
  const enlaces = [
    { ruta: "/admin", texto: "Dashboard", exacta: true },
    { ruta: "/admin/gestion-productos", texto: "Productos" },
    { ruta: "/admin/movimientos", texto: "Movimientos" }
  ];

  return (
    <nav
      className="admin-menu"
      aria-label="Navegación del administrador"
    >
      <ul className="nav nav-pills gap-2 flex-wrap">
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
      </ul>
    </nav>
  );
}

export default MenuAdmin;