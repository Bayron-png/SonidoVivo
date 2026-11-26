import React from "react";

const CampoInput = ({ value, onChange, placeholder = "" }) => {
  return (
    <input
      type="text"
      className="form-control border-start-0"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default CampoInput;