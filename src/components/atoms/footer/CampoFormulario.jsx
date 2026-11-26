import { useState } from "react";

const CampoFormulario = ({
  id,
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  minLength,
  maxLength,
  multiline = false,
  validar = () => "",
  mostrarErrores = false,
}) => {

  const [interactuando, setInteractuando] = useState(false);

  const error = validar(value);

  const mostrar = interactuando || mostrarErrores;

  let claseValidacion = "";

  if (mostrar && error) claseValidacion = "is-invalid";
  else if (mostrar && String(value ?? "").trim()) claseValidacion = "is-valid";
 
  const handleValueChange = (e) => {
    setInteractuando(true);
    onChange(e);
  };

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>

      {multiline ? (
        <textarea
          id={id}
          name={name}
          className={`form-control ${claseValidacion}`}
          value={value ?? ""}
          onChange={handleValueChange}
          onBlur={() => setInteractuando(true)}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          rows={4}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          className={`form-control ${claseValidacion}`}
          value={value ?? ""}
          onChange={handleValueChange}
          onBlur={() => setInteractuando(true)}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
        />
      )}

      {mostrar && error && (
        <div className="invalid-feedback">{error}</div>
        )}
    
    </div>
  );
};

export default CampoFormulario;
