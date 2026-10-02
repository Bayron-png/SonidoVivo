import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const PasswordInput = ({ value, onChange }) => {
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    const val = e.target.value;

    // 1. Ejecutar el onChange que viene del padre
    onChange(e);

    // 2. Validaciones
    if (!val) {
      setError('');
    } else if (val.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
    } else if (!/[A-Z]/.test(val)) {
      setError('La contraseña debe contener al menos una letra mayúscula.');
    } else {
      setError(''); // Todo correcto
    }
  };

  return (
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label className="fw-bold">
        Contraseña
      </Form.Label>
      
      <Form.Control 
        type="password" 
        placeholder="Ingrese su contraseña" 
        value={value}
        onChange={handlePasswordChange}
        isInvalid={!!error}
        required 
      />

      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default PasswordInput;