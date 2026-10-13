import { useCart } from "../../context/CarritoContext";
import CartItem from "../molecules/CartItem";
import TotalCarrito from "../atoms/carrito/TotalCarrito";
import OpcionesEnvio from "../atoms/carrito/OpcionesEnvio";
import MensajeSinProductos from "../atoms/productos/MensajeSinProductos";

const ListaCarrito = () => {
  const { carrito } = useCart();

  if (carrito.length === 0) {
    return <MensajeSinProductos mensaje="Tu carrito está vacío." />;
  }

  return (
    <div className="bg-white p-4 rounded border shadow-sm">
      {carrito.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      
      {/* Selector de tipo de envío */}
      <OpcionesEnvio />

      {/* Desglose de totales */}
      <TotalCarrito />

      <button className="btn btn-success w-100 mt-3 fw-bold py-2">
        Proceder al pago
      </button>
    </div>
  );
};

export default ListaCarrito;