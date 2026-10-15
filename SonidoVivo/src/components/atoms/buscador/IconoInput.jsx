import React from "react";

const IconoInput = ({ icono = "🔍" }) => {
  return (
    <span className="input-group-text bg-white border-end-0">
      {icono}
    </span>
  );
};

export default IconoInput;  