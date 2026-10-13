import { useCart } from "../../context/CarritoContext";
import CartItem from "../molecules/CartItem";
import TotalCarrito from "../atoms/carrito/TotalCarrito";
import OpcionesEnvio from "../atoms/carrito/OpcionesEnvio";
import MensajeSinProductos from "../atoms/productos/MensajeSinProductos";
import BotonProcederPago from "../atoms/carrito/BotonProcederPago";

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

      <BotonProcederPago/>
    </div>
  );
};

export default ListaCarrito;