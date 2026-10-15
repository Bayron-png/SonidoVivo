import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductProvider from "./context/ProductoContext";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Catalogo from "./pages/Catalogo/Catalogo";
import PaginaProductos from "./pages/PaginaProductos/PaginaProductos";
import ScrollToTop from "./hooks/ScrollToTop";
import Carrito from "./pages/Carrito/Carrito";
import AdminCatalogo from "./pages/AdminCatalogo/AdminCatalogo";
import Nosotros from "./pages/Nosotros/Nosotros";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        {/* Scrollea hacia arriba cada vez que se cambia de ruta */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/admin" element={<AdminCatalogo />} />
          <Route path="/nosotros" element={<Nosotros />} />
          
          {/* :categoriaSlug captura dinámicamente cualquier texto en la URL */}
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/catalogo/:slug" element={<PaginaProductos />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;