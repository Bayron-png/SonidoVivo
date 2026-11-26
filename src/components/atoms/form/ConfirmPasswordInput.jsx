import { Form } from 'react-bootstrap';
import { validarConfirmPassword } from '../../../utils/validaciones/validacionConfirmPassword';

const PasswordConfirmInput = ({ value, onChange, passwordToMatch}) => {

  const error = validarConfirmPassword(value, passwordToMatch);

  return (
    <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
      <Form.Label className="fw-bold">
        Confirme contraseña (*)
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
