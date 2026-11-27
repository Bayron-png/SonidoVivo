
import { createContext, useContext, useState } from "react";
import { useProductos } from "./ProductoContext";

const CartContext = createContext();

const CarritoProvider = ({ children }) => {
  const { productosTodos } = useProductos();

  const [carrito, setCarrito] = useState([]);
  const [tipoEnvio, setTipoEnvio] = useState("retiro");

  const COSTO_ENVIO_DOMICILIO = 3500;

  const agregarAlCarrito = (productoId) => {
    const producto = productosTodos.find(
      (p) => p.id === productoId
    );

    if (!producto) return;

    setCarrito((prev) => {
      const existente = prev.find(
        (item) => item.id === productoId
      );

      const cantidadActual = existente?.cantidad ?? 0;

      if (cantidadActual >= producto.stock) {
        return prev;
      }

      if (existente) {
        return prev.map((item) =>
          item.id === productoId
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const disminuirCantidad = (productoId) => {
    setCarrito((prev) =>
      prev
        .map((item) =>
          item.id === productoId
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito((prev) =>
      prev.filter((item) => item.id !== productoId)
    );
  };

  const obtenerStockDisponible = (productoId) => {
    const producto = productosTodos.find(
      (p) => p.id === productoId
    );

    if (!producto) return 0;

    const cantidadEnCarrito =
      carrito.find((item) => item.id === productoId)?.cantidad ?? 0;

    return Math.max(
      0,
      producto.stock - cantidadEnCarrito
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
        obtenerStockDisponible,
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
