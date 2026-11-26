import React from "react";

const TextAreaGroup = ({
  label,
  id,
  name,
  value,
  onChange,
  placeholder = "",
  rows = 3
}) => {
  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={id} className="form-label fw-bold">
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        className="form-control"
        rows={rows}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextAreaGroup;