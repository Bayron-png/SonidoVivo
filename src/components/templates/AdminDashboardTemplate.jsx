import TituloRedondeado from "../atoms/TituloRedondeado";
import Descripcion from "../atoms/Descripcion";
import ResumenDashboard from "../organisms/admin/ResumenDashboard";

function AdminDashboardTemplate({ pedidos, cargandoPedidos, errorPedidos, cargarPedidos }) {
  return (
    <section aria-label="Resumen administrativo">
      <header className="mb-4">
        <TituloRedondeado texto="Administración" />

        <Descripcion
          texto="Gestiona los productos y consulta los movimientos de Sonido Vivo."
        />
      </header>

      <ResumenDashboard
        pedidos={pedidos}
        cargandoPedidos={cargandoPedidos}
        errorPedidos={errorPedidos}
        cargarPedidos={cargarPedidos}
      />
    </section>
  );
}

export default AdminDashboardTemplate;