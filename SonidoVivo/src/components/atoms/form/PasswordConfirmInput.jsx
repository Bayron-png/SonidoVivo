import React from 'react';
import { Form } from 'react-bootstrap';

const PasswordConfirmInput = ({ value, onChange }) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
      <Form.Label className="fw-bold">
        Contraseña
      </Form.Label>

      <Form.Control
        type="password"
        placeholder="Ingrese su contraseña"
        value={value}
        onChange={onChange}
        required
      />
    </Form.Group>
  );
};

export default PasswordConfirmInput;
