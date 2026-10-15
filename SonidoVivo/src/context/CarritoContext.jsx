
import { createContext, useContext, useState } from "react";
import { useProductos } from "./ProductoContext";

const CartContext = createContext();

export const CarritoProvider = ({ children }) => {
  const { productosTodos, ajustarStock } = useProductos();

  const [carrito, setCarrito] = useState([]);
  const [tipoEnvio, setTipoEnvio] = useState("retiro");

  const COSTO_ENVIO_DOMICILIO = 3500;

  const agregarAlCarrito = (productoId) => {
    const productoActual = productosTodos.find(
      (p) => p.id === productoId
    );

    if (!productoActual || productoActual.stock <= 0) return;

    ajustarStock(productoId, -1);

    setCarrito((prev) => {
      const existe = prev.find(
        (item) => item.id === productoId
      );

      if (existe) {
        return prev.map((item) =>
          item.id === productoId
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...prev, { ...productoActual, cantidad: 1 }];
    });
  };

  const disminuirCantidad = (productoId) => {
    const itemCarrito = carrito.find(
      (item) => item.id === productoId
    );

    if (!itemCarrito) return;

    ajustarStock(productoId, 1);

    if (itemCarrito.cantidad === 1) {
      setCarrito((prev) =>
        prev.filter((item) => item.id !== productoId)
      );
    } else {
      setCarrito((prev) =>
        prev.map((item) =>
          item.id === productoId
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
      );
    }
  };

  const eliminarDelCarrito = (productoId) => {
    const itemCarrito = carrito.find(
      (item) => item.id === productoId
    );

    if (!itemCarrito) return;

    ajustarStock(productoId, itemCarrito.cantidad);

    setCarrito((prev) =>
      prev.filter((item) => item.id !== productoId)
    );
  };

  // Se utiliza al finalizar la compra simulada.
  // No se repone el stock: las unidades se consideran vendidas.
  const vaciarCarrito = () => {
    setCarrito([]);
    setTipoEnvio("retiro");
  };

  const subtotal = carrito.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );

  const costoEnvio =
    tipoEnvio === "domicilio" ? COSTO_ENVIO_DOMICILIO : 0;

  const total = subtotal + costoEnvio;

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        disminuirCantidad,
        eliminarDelCarrito,
        vaciarCarrito,
        subtotal,
        costoEnvio,
        total,
        tipoEnvio,
        setTipoEnvio,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CarritoProvider;
