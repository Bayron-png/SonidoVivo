import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const dominiosProhibidos = [
  'gmail.com',
  'hotmail.com',
  'outlook.com',
  'yahoo.com',
  'icloud.com'
];

const GmailInput = ({ value, onChange }) => {
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    const val = e.target.value;
    onChange(e);

    const dominio = val.split('@')[1]?.toLowerCase();

    // 3. Validar dominio
    if (val && dominiosProhibidos.includes(dominio)) {
      setError('No se permiten correos personales (Gmail, Hotmail, etc.). Usa un correo corporativo.');
    } else {
      setError('');
    }
  };

  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className="fw-bold">
        Correo
      </Form.Label>
      
      <Form.Control 
        type="email" 
        placeholder="Ingrese su correo corporativo" 
        value={value}
        onChange={handleEmailChange}
        isInvalid={error} /* Activa los bordes rojos de Bootstrap si hay error */
        required 
      />

      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default GmailInput;