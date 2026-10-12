import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Catalogo from './pages/Catalogo/Catalogo';
import PaginaProductos from './pages/PaginaProductos/PaginaProductos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalogo" element={<Catalogo />} />

        {/* :categoriaSlug captura dinámicamente cualquier texto en la URL */}
        <Route path="/catalogo/:categoriaSlug" element={<PaginaProductos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;