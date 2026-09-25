import React from 'react';
import { Form } from 'react-bootstrap';

const emailInput = ({ value, onChange }) => (
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="fw-bold">Correo</Form.Label>
    <Form.Control 
      type="email" 
      placeholder="Ingrese su correo" 
      value={value} 
      onChange={onChange}
      required 
    />
  </Form.Group>
);

export default emailInput;