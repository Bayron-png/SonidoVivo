import FiltrosCatalogo from "./FiltrosCatalogo";
import ProductosLista from "./ProductosLista";
import Buscador from "../../molecules/admin-productos/Buscador";
import ButtonAction from "../../atoms/botones/ButtonAction"; // <-- 1. Importas tu átomo
import { useCatalogo } from "../../../hooks/useCatalogo";

const ContenidoCatalogo = ({ productos = [] }) => {
  const {
    busqueda,
    setBusqueda,
    categoriaSeleccionada,
    setCategoriaSeleccionada,
    disponibilidad,
    setDisponibilidad,
    productosFiltrados,
    limpiarFiltros
  } = useCatalogo(productos);

  return (
    <div className="row g-4 mt-2">
      <div className="col-12 col-md-3">
        <FiltrosCatalogo
          categoriaSeleccionada={categoriaSeleccionada}
          onCategoriaChange={setCategoriaSeleccionada}
          disponibilidad={disponibilidad}
          onDisponibilidadChange={setDisponibilidad}
        />

        {/* 2. Usas tu átomo reutilizable con el texto adentro */}
        <ButtonAction variant="outline-secondary w-100 mt-3" onClick={limpiarFiltros}>
          Limpiar búsqueda y filtros
        </ButtonAction>
      </div>

      <div className="col-12 col-md-9">
        <div className="mb-3">
          <Buscador
            busqueda={busqueda}
            setBusqueda={setBusqueda}
          />
          <p className="text-muted small mb-0" aria-live="polite">
            {productosFiltrados.length}{" "}
            {productosFiltrados.length === 1
              ? "producto encontrado"
              : "productos encontrados"}
          </p>
        </div>

        <ProductosLista productos={productosFiltrados} />
      </div>
    </div>
  );
};

export default ContenidoCatalogo;