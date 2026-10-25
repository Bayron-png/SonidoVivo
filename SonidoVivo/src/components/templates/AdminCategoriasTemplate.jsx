import useGestionCategorias from "../../hooks/admin/useGestionCategorias";
import TituloRedondeado from "../atoms/TituloRedondeado";
import Descripcion from "../atoms/Descripcion";
import FormularioCategoria from "../organisms/admin/FormularioCategoria";
import TablaCategorias from "../organisms/admin/TablaCategorias";

const AdminCategoriasTemplate = () => {
  const gestion = useGestionCategorias();

  return (
    <div>
      <div className="mb-4">
        <TituloRedondeado texto="Gestión de categorías" />
        <Descripcion texto="Crea, modifica y administra las categorías del catálogo." />
      </div>

      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body py-3 px-4">
          <span className="text-muted small d-block">Total de categorías</span>
          <span className="fs-3 fw-bold">{gestion.totalCategorias}</span>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <FormularioCategoria
            formulario={gestion.formulario}
            categoriaEditando={gestion.categoriaEditando}
            manejarCambio={gestion.manejarCambio}
            manejarEnvio={gestion.manejarEnvio}
            limpiarFormulario={gestion.limpiarFormulario}
          />
        </div>

        <div className="col-12 col-lg-8">
          <TablaCategorias
            categoriasFiltradas={gestion.categoriasFiltradas}
            busqueda={gestion.busqueda}
            setBusqueda={gestion.setBusqueda}
            prepararEdicion={gestion.prepararEdicion}
            solicitarEliminacion={gestion.solicitarEliminacion}
            categoriaPorEliminar={gestion.categoriaPorEliminar}
            cancelarEliminacion={gestion.cancelarEliminacion}
            confirmarEliminacion={gestion.confirmarEliminacion}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminCategoriasTemplate;
