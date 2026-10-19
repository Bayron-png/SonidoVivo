import { useMemo, useState } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import FiltrosCatalogo from "../organisms/catalogo/FiltrosCatalogo";
import ProductosLista from "../organisms/catalogo/ProductosLista";
import Buscador from "../molecules/admin-productos/Buscador";
import TituloRedondeado from "../atoms/TituloRedondeado";
import BotonVolver from "../atoms/botones/BotonVolver";

const normalizarTexto = (valor) =>
  String(valor ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es");

const CatalogoTemplate = ({ productos = [] }) => {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [disponibilidad, setDisponibilidad] = useState("todos");

  const productosFiltrados = useMemo(() => {
    const termino = normalizarTexto(busqueda.trim());

    return productos.filter((producto) => {
      const coincideBusqueda =
        !termino ||
        [
          producto.id,
          producto.nombre,
          producto.categoria,
          producto.categoriaSlug,
          producto.marca,
          producto.modelo,
          producto.descripcion
        ].some((campo) => normalizarTexto(campo).includes(termino));

      const coincideCategoria =
        !categoriaSeleccionada ||
        producto.categoriaSlug === categoriaSeleccionada;

      const coincideDisponibilidad =
        disponibilidad === "todos" ||
        (disponibilidad === "disponibles" && Number(producto.stock) > 0) ||
        (disponibilidad === "agotados" && Number(producto.stock) <= 0);

      return coincideBusqueda && coincideCategoria && coincideDisponibilidad;
    });
  }, [productos, busqueda, categoriaSeleccionada, disponibilidad]);

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoriaSeleccionada("");
    setDisponibilidad("todos");
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1 container pt-5 mb-4">
        <BotonVolver
          label="← Volver al menú principal"
          ruta="/"
        />

        <TituloRedondeado texto="Catálogo de productos" />

        <div className="row g-4 mt-2">
          <div className="col-12 col-md-3">
            <FiltrosCatalogo
              categoriaSeleccionada={categoriaSeleccionada}
              onCategoriaChange={setCategoriaSeleccionada}
              disponibilidad={disponibilidad}
              onDisponibilidadChange={setDisponibilidad}
            />

            <button
              type="button"
              className="btn btn-outline-secondary w-100 mt-3"
              onClick={limpiarFiltros}
            >
              Limpiar búsqueda y filtros
            </button>
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
      </main>

      <Footer />
    </div>
  );
};

export default CatalogoTemplate;
