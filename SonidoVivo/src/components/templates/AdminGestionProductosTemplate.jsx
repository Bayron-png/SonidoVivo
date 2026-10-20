import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import ListaAdmin from "../organisms/admin/ListaAdmin";
import BotonVolver from "../atoms/botones/BotonVolver";
import TituloRedondeado from "../atoms/TituloRedondeado";

const AdminGestionProductosTemplate = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      {/* Contenido principal del administrador */}
      <main className="flex-grow-1 container pt-5 mb-4">
        <BotonVolver label="← Volver a administración" ruta="/admin" />
        <TituloRedondeado texto="Gestionar Productos" />
        
        {/* Organismo que administra la lista, formulario y ventana */}
        <ListaAdmin />
      </main>

      <Footer />
    </div>
  );
};

export default AdminGestionProductosTemplate;