import React, { useEffect } from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

const PasswordConfirmInput = ({ value, onChange, passwordToMatch }) => {

  const [error, setError] = useState('');

  //Valida cada vez que cambie la contraseña original
  useEffect(() => {
    if (!value) {
      setError('');
    } else if (value !== passwordToMatch) {
      setError('Las contraseñas no coinciden');
    } else {
      setError('');
    }
  }, [value, passwordToMatch]
  );


  return (
    <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
      <Form.Label className="fw-bold">
        Confirme contraseña
      </Form.Label>

      <Form.Control
        type="password"
        placeholder="Repita su contraseña"
        value={value}
        onChange={onChange}
        isInvalid={!!error}
        required
      />

      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>

    </Form.Group>
  );
};

export default PasswordConfirmInput;
