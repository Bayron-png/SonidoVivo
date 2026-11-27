import { useCart } from "../../../context/CarritoContext";

import CartItem from "../../molecules/carrito/CartItem";
import TotalCarrito from "../../atoms/carrito/TotalCarrito";
import OpcionesEnvio from "../../atoms/carrito/OpcionesEnvio";
import BotonProcederPago from "../../atoms/carrito/BotonProcederPago";
import MensajeSinProductos from "../../atoms/productos/MensajeSinProductos";
import MensajePedidoExitoso from "../../atoms/carrito/MensajePedidoExitoso";

const ListaCarrito = ({
  confirmando,
  errorPedido,
  pedidoCreado,
  onConfirmarPedido
}) => {
  const { carrito } = useCart();

  if (pedidoCreado) {
    return <MensajePedidoExitoso />;
  }

  if (carrito.length === 0) {
    return (
      <MensajeSinProductos mensaje="Tu carrito está vacío." />
    );
  }

  return (
    <div className="bg-white p-4 rounded border shadow-sm">
      {carrito.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <OpcionesEnvio />

      <TotalCarrito />

      {errorPedido && (
        <p className="alert alert-danger mt-3" role="alert">
          {errorPedido}
        </p>
      )}

      <BotonProcederPago
        onClick={onConfirmarPedido}
        cargando={confirmando}
      />
    </div>
  );
};

export default ListaCarrito;