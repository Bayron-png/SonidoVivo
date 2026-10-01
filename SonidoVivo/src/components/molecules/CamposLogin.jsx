import GmailInput from "../atoms/GmailInput";
import PasswordInput from "../atoms/PasswordInput";
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
