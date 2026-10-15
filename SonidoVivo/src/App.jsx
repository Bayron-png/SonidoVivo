import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductProvider from "./context/ProductoContext";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Catalogo from "./pages/Catalogo/Catalogo";
import PaginaProductos from "./pages/PaginaProductos/PaginaProductos";
import DetalleProducto from "./pages/DetalleProducto/DetalleProducto";
import ScrollToTop from "./hooks/ScrollToTop";
import Carrito from "./pages/Carrito/Carrito";
import AdminCatalogo from "./pages/AdminCatalogo/AdminCatalogo";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/admin" element={<AdminCatalogo />} />

          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/catalogo/:slug" element={<PaginaProductos />} />
          <Route
            path="/catalogo/:categoriaSlug/:productoId"
            element={<DetalleProducto />}
          />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;