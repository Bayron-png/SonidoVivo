import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const GmailLoginInput = ({ value, onChange, validar, errorCredenciales = false}) => {

  const [interactuando, setInteractuando] = useState(false);
  const error = validar(value);
  
  const handleEmailLoginChange = (e) => {
    setInteractuando(true)
    onChange(e);
  }

  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className="fw-bold">
        Correo
      </Form.Label>
      
      <Form.Control 
        type="email" 
        placeholder="Ingrese su correo" 
        value={value}
        onChange={handleEmailLoginChange}
        isInvalid={(interactuando && !!error) || errorCredenciales}
        required
      />
      {interactuando && error && (
        <Form.Control.Feedback type="invalid">
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default GmailLoginInput;