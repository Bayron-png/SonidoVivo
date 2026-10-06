import { Link } from "react-router-dom";

const BotonVolver = ({ label }) => (
  <Link to="/login">
    <button className="boton-volver btn btn-primary" type="submit">
      {label}
    </button>
  </Link>
);

export default BotonVolver;
