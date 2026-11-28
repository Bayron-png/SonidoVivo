import { useState } from "react";
import { useCategorias } from "../../context/CategoriaContext";
import { useProductos } from "../../context/ProductoContext";
import { usePedidosAdmin } from "../../hooks/admin/usePedidosAdmin";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import VendedorDashboardTemplate from "../../components/templates/VendedorDashboardTemplate";

const VendedorDashboard = () => {
  const { categorias } = useCategorias();
  const {
    productosTodos,
    cargando: cargandoProductos,
    error: errorProductos,
    cargarProductos,
    ajustarStock: ajustarStockProducto,
  } = useProductos();
  const {
    pedidos,
    cargando: cargandoPedidos,
    error: errorPedidos,
    cargarPedidos,
    actualizarEstadoPedido,
  } = usePedidosAdmin();

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [ajustesPendientes, setAjustesPendientes] = useState(new Set());
  const [erroresStock, setErroresStock] = useState({});

  const productos = categoriaSeleccionada
    ? productosTodos.filter(
        (producto) =>
          (producto.categoriaSlug || producto.categoria_slug) ===
          categoriaSeleccionada,
      )
    : productosTodos;

  const ajustarStock = async (producto, cambio) => {
    const id = String(producto.id);

    if (ajustesPendientes.has(id)) return;

    setAjustesPendientes((actuales) => new Set(actuales).add(id));
    setErroresStock((actuales) => ({ ...actuales, [id]: "" }));

    try {
      await ajustarStockProducto(producto.id, cambio);
    } catch (error) {
      setErroresStock((actuales) => ({
        ...actuales,
        [id]:
          error.response?.data?.error ||
          error.message ||
          "No se pudo actualizar el stock.",
      }));
    } finally {
      setAjustesPendientes((actuales) => {
        const siguientes = new Set(actuales);
        siguientes.delete(id);
        return siguientes;
      });
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <VendedorDashboardTemplate
          categorias={categorias}
          categoriaSeleccionada={categoriaSeleccionada}
          seleccionarCategoria={setCategoriaSeleccionada}
          productos={productos}
          cargandoProductos={cargandoProductos}
          errorProductos={errorProductos}
          cargarProductos={cargarProductos}
          ajustarStock={ajustarStock}
          ajustesPendientes={ajustesPendientes}
          erroresStock={erroresStock}
          pedidos={pedidos}
          cargandoPedidos={cargandoPedidos}
          errorPedidos={errorPedidos}
          cargarPedidos={cargarPedidos}
          actualizarEstadoPedido={actualizarEstadoPedido}
        />
      </main>
      <Footer />
    </div>
  );
};

export default VendedorDashboard;
