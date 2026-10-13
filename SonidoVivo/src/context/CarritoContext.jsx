import { createContext, useContext, useState } from "react";
import productosData from "../data/productosData";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [productos, setProductos] = useState(productosData);
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (productoId) => {
    const productoActual = productos.find((p) => p.id === productoId);
    if (!productoActual || productoActual.stock <= 0) return;

    // Reducir stock del producto
    setProductos((prev) =>
      prev.map((p) =>
        p.id === productoId ? { ...p, stock: p.stock - 1 } : p
      )
    );

    // Agregar o incrementar en el carrito
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

    // Devolver el stock gastado al catalogo
    setProductos((prev) =>
      prev.map((p) =>
        p.id === productoId ? { ...p, stock: p.stock + itemCarrito.cantidad } : p
      )
    );

    // Filtrar del carrito
    setCarrito((prev) => prev.filter((item) => item.id !== productoId));
  };

  const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <CarritoContext.Provider value={{ productos, carrito, agregarAlCarrito, eliminarDelCarrito, total }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCart = () => useContext(CarritoContext);