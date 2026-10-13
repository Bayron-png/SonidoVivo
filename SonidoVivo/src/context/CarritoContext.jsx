import { createContext, useContext, useState } from "react";
import productosData from "../data/productosData";

const CartContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [productos, setProductos] = useState(productosData);
  const [carrito, setCarrito] = useState([]);
  
  const [tipoEnvio, setTipoEnvio] = useState("retiro");

  const COSTO_ENVIO_DOMICILIO = 3500;

  const agregarAlCarrito = (productoId) => {
    const productoActual = productos.find((p) => p.id === productoId);
    if (!productoActual || productoActual.stock <= 0) return;

    setProductos((prev) =>
      prev.map((p) =>
        p.id === productoId ? { ...p, stock: p.stock - 1 } : p
      )
    );

    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === productoId);
      if (existe) {
        return prev.map((item) =>
          item.id === productoId ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prev, { ...productoActual, cantidad: 1 }];
    });
  };

  const eliminarDelCarrito = (productoId) => {
    const itemCarrito = carrito.find((item) => item.id === productoId);
    if (!itemCarrito) return;

    setProductos((prev) =>
      prev.map((p) =>
        p.id === productoId ? { ...p, stock: p.stock + itemCarrito.cantidad } : p
      )
    );

    setCarrito((prev) => prev.filter((item) => item.id !== productoId));
  };

  // Cálculos de totales
  const subtotal = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  const costoEnvio = tipoEnvio === "domicilio" ? COSTO_ENVIO_DOMICILIO : 0;
  const total = subtotal + costoEnvio;

  return (
    <CartContext.Provider
      value={{
        productos,
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
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