import BotonEliminarItem from "../atoms/carrito/BotonEliminarItem";

const CartItem = ({ item }) => {
  const subtotal = item.precio * item.cantidad;

  return (
    <div className="d-flex align-items-center justify-content-between border-bottom py-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src={item.imagen}
          alt={item.nombre}
          className="imagen-item rounded"
        />
        <div>
          <h6 className="mb-0 fw-bold">{item.nombre}</h6>
          <small className="text-muted">
            Cantidad: {item.cantidad} x ${item.precio.toLocaleString("es-CL")}
          </small>
        </div>
      </div>
      <div className="d-flex align-items-center gap-3">
        <span className="fw-semibold">${subtotal.toLocaleString("es-CL")}</span>
        <BotonEliminarItem productoId={item.id} />
      </div>
    </div>
  );
};

export default CartItem;