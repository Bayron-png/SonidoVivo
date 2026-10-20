import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import ScrollToTop from "./hooks/ScrollToTop";
import ProductProvider from "./context/ProductoContext";
import CarritoProvider from "./context/CarritoContext";
import MovimientoProvider from "./context/MovimientosContext";

// Páginas públicas
import Home from "./pages/Home/Home";
import Nosotros from "./pages/Nosotros/Nosotros";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Catalogo from "./pages/Catalogo/Catalogo";
import DetalleProducto from "./pages/DetalleProducto/DetalleProducto";
import PaginaProductos from "./pages/PaginaProductos/PaginaProductos";
import Carrito from "./pages/Carrito/Carrito";

// Páginas administrativas
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminGestionProductos from "./pages/AdminGestionProductos/AdminGestionProductos";
import Movimientos from "./pages/Movimientos/Movimientos";

// Estructura compartida de administración
import AdminLayout from "./components/templates/AdminLayout";

function App() {
  return (
    <ProductProvider>
      <CarritoProvider>
        <MovimientoProvider>
          <BrowserRouter>
            <ScrollToTop />

            <Routes>
              {/* Rutas públicas */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/nosotros" element={<Nosotros />} />

              <Route path="/catalogo" element={<Catalogo />} />
              <Route
                path="/catalogo/:slug"
                element={<PaginaProductos />}
              />
              <Route
                path="/catalogo/:categoriaSlug/:productoId"
                element={<DetalleProducto />}
              />

              {/* Rutas administrativas */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />

                <Route
                  path="gestion-productos"
                  element={<AdminGestionProductos />}
                />

                <Route
                  path="movimientos"
                  element={<Movimientos />}
                />
              </Route>

              {/* Compatibilidad con rutas anteriores */}
              <Route
                path="/admin/dashboard"
                element={<Navigate to="/admin" replace />}
              />

              <Route
                path="/movimientos"
                element={<Navigate to="/admin/movimientos" replace />}
              />
            </Routes>
          </BrowserRouter>
        </MovimientoProvider>
      </CarritoProvider>
    </ProductProvider>
  );
}

export default App;