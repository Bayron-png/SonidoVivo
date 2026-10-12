import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Catalogo from "./pages/Catalogo/Catalogo";
import PaginaProductos from "./pages/PaginaProductos/PaginaProductos";
import Carrito from "./pages/Carrito/Carrito";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/carrito" element={<Carrito />} />
        
        {/* :categoriaSlug captura dinámicamente cualquier texto en la URL */}
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/catalogo/:slug" element={<PaginaProductos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
