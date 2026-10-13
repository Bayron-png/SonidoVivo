import { useCart } from "../../context/CarritoContext";
import CartItem from "../molecules/CartItem";
import TotalCarrito from "../atoms/carrito/TotalCarrito";
import MensajeSinProductos from "../atoms/productos/MensajeSinProductos";

const ListaCarrito = () => {
  const { carrito, total } = useCart();

  if (carrito.length === 0) {
    return <MensajeSinProductos mensaje="Tu carrito está vacío." />;
  }

  return (
    <div className="bg-white p-4 rounded border shadow-sm">
      {carrito.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <TotalCarrito total={total} />
      <button className="btn btn-success w-100 mt-2">Proceder al pago</button>
    </div>
  );
};

export default ListaCarrito;