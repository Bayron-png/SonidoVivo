import { Link } from "react-router-dom";

const BotonVolver = ({ label = "Volver", ruta = "/" }) => (
  <Link to={ruta}>
    <button className="boton-volver btn btn-primary" type="button">
      {label}
    </button>
  </Link>
);

export default BotonVolver;