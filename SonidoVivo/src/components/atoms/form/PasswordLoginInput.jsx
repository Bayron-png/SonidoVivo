import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const PasswordLoginInput = ({ value, onChange, errorCredenciales = false}) => {

  return (
    <Form.Group className="mb-3" controlId="formLoginPassword">
      <Form.Label className="fw-bold">
        Contraseña
      </Form.Label>

      <Form.Control
        type="password"
        placeholder="Ingrese su contraseña"
        value={value}
        onChange={onChange}
        isInvalid={errorCredenciales}
        required
      />
      </Form.Group>
  );
};

export default PasswordLoginInput;