import GmailInput from "../atoms/login/GmailInput";
import PasswordInput from "../atoms/login/PasswordInput";
import BotonEnviar from "../atoms/botones/BotonEnviar";

const CamposLogin = ({ gmail, contrasena, onGmailChange, onPasswordChange }) => (
  <>
    <GmailInput value={gmail} onChange={onGmailChange} />
    <PasswordInput value={contrasena} onChange={onPasswordChange} />

    <div className="template-registrar">
      <BotonEnviar label="Enviar"/>
      
      <span className="label-crear-cuenta">
        ¿No tienes una cuenta?{" "}
        <a href="#" className="label-registrar">
          Regístrate
        </a>
      </span>
    </div>
  </>
);

export default CamposLogin;
