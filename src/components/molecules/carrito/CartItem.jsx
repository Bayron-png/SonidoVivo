import BotonEliminarItem from "../../atoms/carrito/BotonEliminarItem";
import ControlesCantidad from "../../atoms/carrito/ControlesCantidad";

const CartItem = ({ item }) => {
  const subtotal = item.precio * item.cantidad;

  return (
    <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between border-bottom py-3 gap-2 gap-sm-3">
      {/* Información del producto */}
      <div className="d-flex align-items-center gap-3">
        <img
          src={item.imagen}
          alt={item.nombre}
          className="imagen-item rounded flex-shrink-0"
          style={{ width: "50px", height: "50px", objectFit: "contain" }}
        />
        <div>
          <h6 className="mb-1 fw-bold">{item.nombre}</h6>
          <small className="text-muted d-block mb-1">
            ${item.precio.toLocaleString("es-CL")} c/u
          </small>
        </div>
      </div>

      {/* Controles de Cantidad + Precio Subtotal + Botón Eliminar */}
      <div className="d-flex align-items-center justify-content-between justify-content-sm-end gap-3 ms-auto-sm">
        {/* Selector interactivo - / + */}
        <ControlesCantidad item={item} />

        <span className="fw-semibold text-nowrap">
          ${subtotal.toLocaleString("es-CL")}
        </span>
        
        <BotonEliminarItem productoId={item.id} />
      </div>
    </div>
  );
};

export default CartItem;