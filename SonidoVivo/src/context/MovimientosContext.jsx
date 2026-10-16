import { createContext, useContext, useState } from "react";

const MovimientoContext = createContext();

export const MovimientoProvider = ({ children }) => {
  const [movimientos, setMovimientos] = useState([]);

  const agregarMovimiento = (pedido) => {
    const nuevoMovimiento = {
      id: Date.now().toString(),
      fecha: new Date().toLocaleString("es-CL"),
      ...pedido,
    };

    setMovimientos((prev) => [nuevoMovimiento, ...prev]);
  };

  return (
    <MovimientoContext.Provider
      value={{
        movimientos,
        agregarMovimiento,
      }}
    >
      {children}
    </MovimientoContext.Provider>
  );
};

export const useMovimientos = () => useContext(MovimientoContext);

export default MovimientoProvider;