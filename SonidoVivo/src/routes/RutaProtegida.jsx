import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RutaProtegida({ rolPermitido }) {
  const { usuario } = useAuth();

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  if (usuario.rol !== rolPermitido) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default RutaProtegida;