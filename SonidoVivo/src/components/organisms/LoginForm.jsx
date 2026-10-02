import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import CamposLogin from "../molecules/CamposLogin";
import TituloRedondeado from "../atoms/TituloRedondeado";

const LoginForm = ({onSubmit}) => {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const formularioEnviado = (e) => {
    e.preventDefault();
    onSubmit({gmail, password});
  };

  return (
    <div className = "contenedor-loginform">
      {/* Contenido principal del login */}
      <Container className="tarjeta-login">
        {/* Título azul redondeado */}
        <div className="titulo-login">
          <TituloRedondeado texto= "Iniciar Sesión"/>
        </div>

        {/* Formulario adaptativo con Bootstrap Grid */}
        <Row className="w-100 justify-content-center">
          <Col xs={12} sm={10} md={6} lg={4}>
            <Form onSubmit={formularioEnviado}>
              <CamposLogin
                gmail={gmail}
                password={password}
                onGmailChange={(e) => setGmail(e.target.value)}
                onPasswordChange={(e) => setPassword(e.target.value)}
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
