// src/components/organisms/TablaProductos.jsx
import React, { useState } from "react";
import Buscador from "../molecules/Buscador";
import FilaProducto from "../molecules/FilaProducto";
import VentanaConfirmacion from "./VentanaConfirmacion";
import ButtonAction from "../atoms/botones/ButtonAction";

const TablaProductos = ({
  productos = [],
  onEditar,
  onEliminar,
  onNuevoProducto
}) => {
  const [busqueda, setBusqueda] = useState("");
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  // Filtrado de productos en tiempo real por Nombre o Categoría
  const productosFiltrados = productos.filter((prod) => {
    const termino = busqueda.toLowerCase();
    const nombre = (prod.nombre || prod.name || "").toLowerCase();
    const categoria = (prod.categoria || prod.category || "").toLowerCase();
    return nombre.includes(termino) || categoria.includes(termino);
  });

  // Manejadores para la eliminación mediante la VentanaConfirmacion
  const solicitarEliminacion = (id) => {
    const prod = productos.find((p) => p.id === id);
    setProductoAEliminar(prod);
  };

  const confirmarEliminacion = () => {
    if (productoAEliminar) {
      onEliminar(productoAEliminar.id);
      setProductoAEliminar(null);
    }
  };

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        {/* Encabezado del Organismo: Buscador + Botón Crear */}
        <div className="row g-3 align-items-center mb-3">
          <div className="col-12 col-md-8">
            <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />
          </div>
          <div className="col-12 col-md-4 text-md-end">
            <ButtonAction variant="success" onClick={onNuevoProducto}>
              ➕ Nuevo Producto
            </ButtonAction>
          </div>
        </div>

        {/* Tabla de Productos con clases de Bootstrap */}
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th scope="col" className="text-center" width="70">Imagen</th>
                <th scope="col">Producto / Categoría</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
                <th scope="col" className="text-end">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productosFiltrados.length > 0 ? (
                productosFiltrados.map((producto) => (
                  <FilaProducto
                    key={producto.id}
                    producto={producto}
                    onEditar={onEditar}
                    onEliminar={solicitarEliminacion}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-muted">
                    No se encontraron productos que coincidan con la búsqueda.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ventana flotante de confirmación de eliminación */}
      <VentanaConfirmacion
        mostrar={Boolean(productoAEliminar)}
        titulo="Confirmar Eliminación"
        mensaje="¿Estás seguro de que deseas eliminar permanentemente este producto del catálogo?"
        nombreItem={productoAEliminar?.nombre || productoAEliminar?.name}
        onCancelar={() => setProductoAEliminar(null)}
        onConfirmar={confirmarEliminacion}
        textoConfirmar="Sí, Eliminar"
        varianteConfirmar="danger"
      />
    </div>
  );
};

export default TablaProductos;