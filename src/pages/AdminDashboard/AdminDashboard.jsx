import AdminDashboardTemplate from "../../components/templates/AdminDashboardTemplate";
import { usePedidosAdmin } from "../../hooks/admin/usePedidosAdmin";

function AdminDashboard() {
  const pedidosAdmin = usePedidosAdmin();

  return <AdminDashboardTemplate {...pedidosAdmin} />;
}

export default AdminDashboard;