// src/components/atoms/InputGroup.jsx
import React, { useState } from "react";

// Un "campo de formulario" reutilizable. Todo lo que cambia entre
// un campo y otro (label, nombre, tipo, etc.) llega por props.
const InputGroup = ({
  label, id, name,
  type = "text", // si no pasan el type, es "text" por defecto
  value,         // el valor actual (lo guarda el organismo, no este componente)
  onChange,      // funcion del organismo que actualiza ese valor
  placeholder,
  required = false,
  min,
  validar = () => "",
  mostrarErrores = false
  }) => {

  // Estado PROPIO del atomo: ¿el usuario ya interactuo con este campo?
  // Sirve para no mostrar errores en rojo antes de que escriba nada.
  const [interactuando, setInteractuando] = useState(false);

  // En cada render se ejecuta la validacion con el valor actual.
  // Devuelve "" si esta bien, o un texto si hay error.
  const error = validar(value);

  const mostrar = interactuando || mostrarErrores;

  let claseValidacion = "";

  if (mostrar && error) claseValidacion = "is-invalid";
  else if (mostrar && String(value ?? "").trim()) claseValidacion = "is-valid";

  // Se ejecuta cada vez que el usuario escribe
  const handleValueChange = (e) => {
    setInteractuando(true); // marca "ya lo toco"
    onChange(e);            // avisa al organismo para que guarde el nuevo valor
  };

  return (
    <div className="mb-3">
      {/* Solo dibuja la etiqueta si pasaron el label.
          el * rojo si es obligatorio*/}
      {label && (
        <label htmlFor={id} className="form-label fw-bold">
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}                 // debe coincidir con el htmlFor del label
        name={name}             // lo usa el organismo para saber que campo cambio
        className={`form-control ${claseValidacion}`}
        placeholder={placeholder}
        value={value ?? ""}     // respeta el 0, solo vacía null/undefined
        min={min}
        onChange={handleValueChange}
        onBlur={() => setInteractuando(true)} 
        required={required}
      />

      {mostrar && error && (
        <div className="invalid-feedback">{error}</div>
      )}  
    </div>
  );
};

export default InputGroup;