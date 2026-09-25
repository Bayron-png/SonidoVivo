import React from 'react';
import EmailInput from '../atoms/EmailInput';
import PasswordInput from '../atoms/PasswordInput';
import SubmitButton from '../atoms/SubmitButton';

const CamposLogin = ({ email, password, onEmailChange, onPasswordChange }) => (
  <>
    <EmailInput value={email} onChange={onEmailChange} />
    <PasswordInput value={password} onChange={onPasswordChange} />
    
    <div className="d-flex flex-column align-items-start mt-3">
      <SubmitButton label="Iniciar sesion" />
      <span className="mt-2 text-dark fs-6">
        ¿No tienes una cuenta? <a href="#" className="text-decoration-none text-dark fw-normal">Regístrate</a>
      </span>
    </div>
  </>
);

export default CamposLogin;