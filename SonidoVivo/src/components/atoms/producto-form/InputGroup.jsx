// src/components/atoms/InputGroup.jsx
import React from "react";

const InputGroup = ({ label, id, name, type = "text", value, onChange, placeholder, required = false }) => {
  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={id} className="form-label fw-bold">
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputGroup;