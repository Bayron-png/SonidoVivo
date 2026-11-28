import NombreInput from "../../atoms/form/NombreInput";
import ApellidoInput from "../../atoms/form/ApellidoInput";
import GmailInput from "../../atoms/form/GmailInput";
import PasswordInput from "../../atoms/form/PasswordInput";
import ConfirmPasswordInput from "../../atoms/form/ConfirmPasswordInput"
import BotonEnviar from "../../atoms/botones/BotonEnviar";
import { Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import { validarNombre } from "../../../utils/validaciones/validacionNombre";
import { validarApellido } from "../../../utils/validaciones/validacionApellido";
import { validarCorreo } from "../../../utils/validaciones/validacionCorreo";
import { validarPassword } from "../../../utils/validaciones/validacionPassword";

const CamposRegister = ({
  nombre, apellido, gmail,
  password, confirmPassword,
  onNombreChange, onApellidoChange,
  onGmailChange,
  onPasswordChange, onConfirmPasswordChange }) => (

  <Row className="g-3">
    <Col xs={12} sm={6} md={4}>
      <NombreInput value={nombre} onChange={onNombreChange} validar={validarNombre}/>
    </Col>
    <Col xs={12} sm={6} md={4}>
      <ApellidoInput value={apellido} onChange={onApellidoChange} validar={validarApellido}/>
    </Col>
    <Col xs={12} sm={6} md={4}>
      <GmailInput value={gmail} onChange={onGmailChange} validar={validarCorreo}/>
    </Col>
    <Col xs={12} sm={6} md={4}>
      <PasswordInput value={password} onChange={onPasswordChange} validar={validarPassword}/>
    </Col>
    <Col xs={12} sm={6} md={4}>
      <ConfirmPasswordInput value={confirmPassword} onChange={onConfirmPasswordChange} passwordToMatch={password}/>
    </Col>

    <Col xs={12}>
      <div className="contenedor-redireccion-login">
        <BotonEnviar label="Registrarse" />

        <span className="label-iniciarsesion">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="label-login">
            Inicia sesion
          </Link>
        </span>
      </div>
    </Col>
  </Row>

);

export default CamposRegister;
