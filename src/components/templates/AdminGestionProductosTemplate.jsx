import ListaAdmin from "../organisms/admin/ListaAdmin";
import TituloRedondeado from "../atoms/TituloRedondeado";

function AdminGestionProductosTemplate() {
  return (
    <>
      <header className="mb-4">
        <TituloRedondeado texto="Gestionar Productos" />
      </header>

      <ListaAdmin />
    </>
  );
}

export default AdminGestionProductosTemplate;