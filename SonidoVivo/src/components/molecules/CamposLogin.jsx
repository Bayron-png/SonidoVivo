import BotonEnviar from "../atoms/botones/BotonEnviar";

import { Link } from 'react-router-dom';
import GmailLoginInput from "../atoms/form/GmailLoginInput";
import PasswordLoginInput from "../atoms/form/PasswordLoginInput";

const CamposLogin = ({
  gmail,
  password,
  onGmailLoginChange,
  onPasswordLoginChange,
  validarCorreoLogin,
  errorCredenciales
  }) => (
  <>
    <GmailLoginInput value={gmail} onChange={onGmailLoginChange} validar={validarCorreoLogin} errorCredenciales={errorCredenciales}/>
    <PasswordLoginInput value={password} onChange={onPasswordLoginChange} errorCredenciales={errorCredenciales}/>
    
    {errorCredenciales && (
      <p className="text-danger">
        El correo o la contraseña son incorrectos.
      </p>
    )}

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
