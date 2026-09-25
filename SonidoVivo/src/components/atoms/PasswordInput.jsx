import React from 'react';
import { Form } from 'react-bootstrap';

const passwordInput = ({ value, onChange }) => (
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="fw-bold">Contraseña</Form.Label>
    <Form.Control 
      type="password" 
      placeholder="Ingrese su contraseña" 
      value={value} 
      onChange={onChange}
      required 
    />
  </Form.Group>
);

export default PasswordInput;