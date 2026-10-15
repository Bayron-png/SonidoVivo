import React from "react";

const BotonCerrar = ({ onClick, blanco = false }) => {
  return (
    <button
      type="button"
      className={`btn-close ${blanco ? "btn-close-white" : ""}`}
      aria-label="Cerrar"
      onClick={onClick}
    ></button>
  );
};

export default BotonCerrar;