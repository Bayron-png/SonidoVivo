import NombreInput from "../atoms/form/NombreInput";
import ApellidoInput from "../atoms/form/ApellidoInput";
import RutInput from "../atoms/form/RutInput";
import GmailInput from "../atoms/form/GmailInput";
import TelefonoInput from "../atoms/form/TelefonoInput";
import PasswordInput from "../atoms/form/PasswordInput";
import PasswordConfirmInput from "../atoms/form/PasswordConfirmInput"
import BotonEnviar from "../atoms/botones/BotonEnviar";

import { Link } from "react-router-dom";

const CamposRegister = ({
  nombre, apellido, rut, gmail, telefono,
  contrasena, contrasena_confirm,
  onNombreChange, onApellidoChange, onRutChange,
  onGmailChange, onTelefonoChange,
  onPasswordChange, onPasswordConfirmChange }) => (

  <>
    <NombreInput value={nombre} onChange={onNombreChange} />
    <ApellidoInput value={apellido} onChange={onApellidoChange} />
    <RutInput value={rut} onChange={onRutChange} />
    <GmailInput value={gmail} onChange={onGmailChange} />
    <TelefonoInput value={telefono} onChange={onTelefonoChange} />
    <PasswordInput value={contrasena} onChange={onPasswordChange} />
    <PasswordConfirmInput value={contrasena_confirm} onChange={onPasswordConfirmChange} />

    <div className="contenedor-login">
      <BotonEnviar label="Registrarse" />

      <span className="label-iniciarsesion">
        ¿Ya tienes una cuenta?{" "}
        <Link to="/login" className="label-login">
          Inicia sesion
        </Link>
      </span>
    </div>
  </>

);

export default CamposRegister;
