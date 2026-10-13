import { useCart } from "../../../context/CarritoContext";

const ControlesCantidad = ({ item }) => {
  const { agregarAlCarrito, disminuirCantidad, productos } = useCart();

  // Verificar si queda stock disponible para habilitar el botón '+'
  const productoCatalogo = productos.find((p) => p.id === item.id);
  const tieneStockDisponible = productoCatalogo && productoCatalogo.stock > 0;

  return (
    <div className="d-flex align-items-center gap-2 border rounded px-2 py-1 bg-light">
      <button
        type="button"
        className="btn btn-sm btn-outline-secondary border-0 px-2 py-0 fw-bold"
        onClick={() => disminuirCantidad(item.id)}
        title="Restar una unidad"
      >
        -
      </button>

      <span className="fw-bold small px-1">{item.cantidad}</span>

      <button
        type="button"
        className="btn btn-sm btn-outline-secondary border-0 px-2 py-0 fw-bold"
        onClick={() => agregarAlCarrito(item.id)}
        disabled={!tieneStockDisponible}
        title={tieneStockDisponible ? "Sumar una unidad" : "Sin más stock disponible"}
      >
        +
      </button>
    </div>
  );
};

export default ControlesCantidad;