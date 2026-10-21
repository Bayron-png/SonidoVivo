import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import CamposLogin from "../../molecules/formularios/CamposLogin";
import TituloRedondeado from "../../atoms/TituloRedondeado";
import { validarCorreoLogin } from "../../../utils/validaciones/validacionCorreoLogin";
import { useAuth } from "../../../context/AuthContext";

const LoginForm = () => {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCredenciales, setErrorCredenciales] = useState(false);

  const navigate = useNavigate();
  const { iniciarSesion } = useAuth();

  const formularioEnviado = (e) => {
    e.preventDefault();

    const errorCorreo = validarCorreoLogin(gmail);

    if (errorCorreo) {
      return;
    }

    const usuario = iniciarSesion(gmail, password);

    if (!usuario) {
      setErrorCredenciales(true);
      return;
    }

    setErrorCredenciales(false);

    if (usuario.rol === "administrador") {
      navigate("/admin", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="contenedor-loginform">
      {/* Contenido principal del login */}
      <Container className="tarjeta-login">
        {/* Título azul redondeado */}
        <div className="titulo-login">
          <TituloRedondeado texto="Iniciar Sesión" />
        </div>

        {/* Formulario adaptativo con Bootstrap Grid */}
        <Row className="w-100 justify-content-center">
          <Col xs={12} sm={10} md={6} lg={4}>
            <Form onSubmit={formularioEnviado}>
              <CamposLogin
                gmail={gmail}
                password={password}
                onGmailLoginChange={(e) => { setGmail(e.target.value); setErrorCredenciales(false); }}
                onPasswordLoginChange={(e) => { setPassword(e.target.value); setErrorCredenciales(false); }}
                validarCorreoLogin={validarCorreoLogin}
                errorCredenciales={errorCredenciales}
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
