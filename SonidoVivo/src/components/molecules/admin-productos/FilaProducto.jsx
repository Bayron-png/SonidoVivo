import React from "react";
import InsigniaStock from "../../atoms/producto-form/InsigniaStock";
import ButtonAction from "../../atoms/botones/ButtonAction";

const FilaProducto = ({ producto, onEditar, onEliminar }) => {
  return (
    <tr>
      {/* Imagen miniatura usando únicamente clases utilitarias de Bootstrap */}
      <td className="align-middle text-center">
        {producto.imagen ? (
          <img
            src={producto.imagen}
            alt={producto.nombre || producto.name}
            className="img-thumbnail rounded object-fit-cover"
            width="48"
            height="48"
          />
        ) : (
          <div
            className="bg-light text-secondary rounded border d-flex align-items-center justify-content-center mx-auto small"
            width="48"
            height="48"
          >
            Sin img
          </div>
        )}
      </td>

      {/* Nombre y Categoría */}
      <td className="align-middle">
        <div className="fw-bold">{producto.nombre || producto.name}</div>
        <small className="text-muted">{producto.categoria || producto.category}</small>
      </td>

      {/* Precio */}
      <td className="align-middle fw-bold">
        ${Number(producto.precio || producto.price || 0).toLocaleString("es-CL")}
      </td>

      {/* Estado de Stock */}
      <td className="align-middle">
        <InsigniaStock stock={producto.stock} />
      </td>

      {/* Acciones */}
      <td className="align-middle text-end">
        <div className="d-flex justify-content-end gap-2">
          <ButtonAction
            variant="outline-primary"
            onClick={() => onEditar(producto)}
          >
            ✏️ Editar
          </ButtonAction>

          <ButtonAction
            variant="outline-danger"
            onClick={() => onEliminar(producto.id)}
          >
            🗑️ Eliminar
          </ButtonAction>
        </div>
      </td>
    </tr>
  );
};

export default FilaProducto;