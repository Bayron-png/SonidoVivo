import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./hooks/ScrollToTop";
import ProductProvider from "./context/ProductoContext";
import CarritoProvider from "./context/CarritoContext";
import MovimientoProvider from "./context/MovimientosContext";

import Home from "./pages/Home/Home";
import Nosotros from "./pages/Nosotros/Nosotros";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import Catalogo from "./pages/Catalogo/Catalogo";
import DetalleProducto from "./pages/DetalleProducto/DetalleProducto";
import PaginaProductos from "./pages/PaginaProductos/PaginaProductos";
import Carrito from "./pages/Carrito/Carrito";

import AdminCatalogo from "./pages/AdminCatalogo/AdminCatalogo";
import Movimientos from "./pages/Movimientos/Movimientos";


function App() {
  return (
    <ProductProvider>
      <CarritoProvider>
        <MovimientoProvider>
          <BrowserRouter>
            <ScrollToTop />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/admin" element={<AdminCatalogo />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/movimientos" element={<Movimientos />} />

              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/catalogo/:slug" element={<PaginaProductos />} />
              <Route
                path="/catalogo/:categoriaSlug/:productoId"
                element={<DetalleProducto />}
              />
            </Routes>
          </BrowserRouter>
        </MovimientoProvider>
      </CarritoProvider>
    </ProductProvider>
  );
}

export default App;
