import GmailInput from "../atoms/form/GmailInput";
import PasswordInput from "../atoms/form/PasswordInput";
import BotonEnviar from "../atoms/botones/BotonEnviar";

import { Link } from 'react-router-dom';

const CamposLogin = ({ gmail, contrasena, onGmailChange, onPasswordChange }) => (
  <>
    <GmailInput value={gmail} onChange={onGmailChange} />
    <PasswordInput value={contrasena} onChange={onPasswordChange} />

    <div className="contenedor-registrar">
      <BotonEnviar label="Enviar"/>
      
      <span className="label-crear-cuenta">
        ¿No tienes una cuenta?{" "}
        <Link to ="/register" className="label-registrar">
          Regístrate
        </Link>
      </span>
    </div>
  </>
);

export default CamposLogin;
