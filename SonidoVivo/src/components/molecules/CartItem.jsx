import BotonEliminarItem from "../atoms/carrito/BotonEliminarItem";

const CartItem = ({ item }) => {
  const subtotal = item.precio * item.cantidad;

  return (
    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between border-bottom py-3 gap-3">
      {/* Información principal: Imagen + Nombre y Cantidad */}
      <div className="d-flex align-items-center gap-3">
        <img
          src={item.imagen}
          alt={item.nombre}
          className="imagen-item rounded flex-shrink-0"
          style={{ width: "50px", height: "50px", objectFit: "contain" }}
        />
        <div>
          <h6 className="mb-0 fw-bold text-break">{item.nombre}</h6>
          <small className="text-muted d-block">
            Cantidad: {item.cantidad} x ${item.precio.toLocaleString("es-CL")}
          </small>
        </div>
      </div>

      {/* Precio y Botón*/}
      <div className="d-flex align-items-center justify-content-between justify-content-sm-end gap-3 w-100 w-sm-auto pt-2 pt-sm-0 border-top border-top-sm-0">
        <span className="fw-semibold text-nowrap">
          ${subtotal.toLocaleString("es-CL")}
        </span>
        <BotonEliminarItem productoId={item.id} />
      </div>
    </div>
  );
};

export default CartItem;