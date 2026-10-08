import { Link } from "react-router-dom";

const LogoHeader = () => (
  <Link to="/" className="label-registrar">
    <img
      src="/logo.png"
      alt="Logo SonidoVivo"
      height="50"
      className="flex-shrink-0"
      style={{ width: "auto", objectFit: "contain" }}
    />
  </Link>
);

export default LogoHeader;