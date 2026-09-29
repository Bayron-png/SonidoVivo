import EmailInput from "../atoms/EmailInput";
import PasswordInput from "../atoms/PasswordInput";
import SubmitButton from "../atoms/SubmitButton";
import "../../pages/Login/Login.css";

const CamposLogin = ({ email, password, onEmailChange, onPasswordChange }) => (
  <>
    <EmailInput value={email} onChange={onEmailChange} />
    <PasswordInput value={password} onChange={onPasswordChange} />

    <div className="template-registrar">
      <SubmitButton label="Enviar" />
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
