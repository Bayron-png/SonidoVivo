import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const PasswordInput = ({ value, onChange, validar }) => {

  const [click, setClick] = useState(false);
  const error = validar(value);

  const handlePasswordChange = (e) => {
    setClick(true)
    onChange(e);
  };

  return (
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label className="fw-bold">
        Contraseña (*)
      </Form.Label>

      <Form.Control
        type="password"
        placeholder="Ingrese su contraseña"
        value={value}
        onChange={handlePasswordChange}
        isInvalid={click && !!error}
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

export default PasswordInput;