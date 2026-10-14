import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const GmailInput = ({ value, onChange, validar}) => {

  const [click, setClick] = useState(false);
  const error = validar(value);
  
  const handleEmailChange = (e) => {
    setClick(true)
    onChange(e);
  }

  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className="fw-bold">
        Correo (*)
      </Form.Label>
      
      <Form.Control 
        type="email" 
        placeholder="Ingrese su correo" 
        value={value}
        onChange={handleEmailChange}
        isInvalid={click && !!error} /* Activa los bordes rojos de Bootstrap si hay error */
        isValid={click && !error && !!value.trim()}
        required
      />
      {click && error && (
        <Form.Control.Feedback type="invalid">
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default GmailInput;