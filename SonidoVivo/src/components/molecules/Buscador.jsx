import React from "react";
import IconoInput from "../atoms/buscador/IconoInput";
import CampoInput from "../atoms/buscador/CampoInput";
import ButtonAction from "../atoms/botones/ButtonAction";

const Buscador = ({ busqueda, setBusqueda }) => {
  return (
    <div className="input-group mb-3">
      <IconoInput icono="🔍" />
      <CampoInput
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar por nombre o categoría..."
      />
      {busqueda && (
        <ButtonAction
          variant="outline-secondary"
          onClick={() => setBusqueda("")}
        >
          Limpiar
        </ButtonAction>
      )}
    </div>
  );
};

export default Buscador;