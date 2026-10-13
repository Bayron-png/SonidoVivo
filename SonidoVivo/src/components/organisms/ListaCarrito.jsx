import { useState } from "react";
import { useCart } from "../../context/CarritoContext";
import CartItem from "../molecules/CartItem";
import TotalCarrito from "../atoms/carrito/TotalCarrito";
import OpcionesEnvio from "../atoms/carrito/OpcionesEnvio";
import BotonProcederPago from "../atoms/carrito/BotonProcederPago";
import MensajeSinProductos from "../atoms/productos/MensajeSinProductos";
import MensajePedidoExitoso from "../atoms/carrito/MensajePedidoExitoso";

const ListaCarrito = () => {
  const { carrito } = useCart();
  const [comprado, setComprado] = useState(false);

  // Si se completó el pago
  if (comprado) {
    return <MensajePedidoExitoso onVolver={() => setComprado(false)} />;
  }

  // Si el carrito está vacío
  if (carrito.length === 0) {
    return <MensajeSinProductos mensaje="Tu carrito está vacío." />;
  }

  return (
    <div className="bg-white p-4 rounded border shadow-sm">
      {carrito.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      
      <OpcionesEnvio />
      <TotalCarrito />

      <BotonProcederPago onPagoCompletado={() => setComprado(true)} />
    </div>
  );
};

export default ListaCarrito;