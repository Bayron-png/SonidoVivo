
import { Link } from "react-router-dom";

const EnlacesFooter = () => {
  return (
    <>
      <h2 className="h5 fw-bold mb-3">
        Enlaces rápidos
      </h2>

      <ul className="list-unstyled d-grid gap-2">
        <li>
          <Link to="/" className="footer-enlace">
            Inicio
          </Link>
        </li>

        <li>
          <Link to="/catalogo" className="footer-enlace">
            Catálogo
          </Link>
        </li>

        <li>
          <Link to="/login" className="footer-enlace">
            Iniciar sesión
          </Link>
        </li>

        <li>
          <Link to="/register" className="footer-enlace">
            Registrarse
          </Link>
        </li>
      </ul>
    </>
  );
};

export default EnlacesFooter;
