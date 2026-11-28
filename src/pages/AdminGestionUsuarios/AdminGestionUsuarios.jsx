import AdminGestionUsuariosTemplate from "../../components/templates/AdminGestionUsuariosTemplate";
import { useGestionUsuarios } from "../../hooks/admin/useGestionUsuarios";

function AdminGestionUsuarios() {
  const gestion = useGestionUsuarios();

  return <AdminGestionUsuariosTemplate {...gestion} />;
}

export default AdminGestionUsuarios;