import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Catalogo from './pages/Catalogo/Catalogo';
import ListaProductos from './pages/ListaProductos/ListaProductos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalogo" element={<Catalogo />} />

        {/* :categoriaSlug captura dinámicamente cualquier texto en la URL */}
        <Route path="/catalogo/:categoriaSlug" element={<ListaProductos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;