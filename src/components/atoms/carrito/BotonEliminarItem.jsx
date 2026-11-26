import { useCart } from "../../../context/CarritoContext";

const BotonEliminarItem = ({ productoId }) => {
  const { eliminarDelCarrito } = useCart();

  return (
    <button
      onClick={() => eliminarDelCarrito(productoId)}
      className="btn btn-outline-danger btn-sm"
    >
      Eliminar
    </button>
  );
};

export default BotonEliminarItem;