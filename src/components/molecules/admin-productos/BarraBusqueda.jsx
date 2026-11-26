import React from "react";
import CampoInput from "../../atoms/barra-busqueda/CampoInput";
import ButtonAction from "../../atoms/botones/ButtonAction";

const BarraBusqueda = ({ busqueda, setBusqueda }) => {
  return (
    <div className="input-group mb-3">
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

export default BarraBusqueda;