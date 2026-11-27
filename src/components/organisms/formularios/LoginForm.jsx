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
  const [cargando, setCargando] = useState(false);
  const [errorServidor, setErrorServidor] = useState("");

  const navigate = useNavigate();
  const { iniciarSesion } = useAuth();

  const formularioEnviado = async (e) => {
    e.preventDefault();

    if (cargando) return;

    const errorCorreo = validarCorreoLogin(gmail);

    if (errorCorreo) return;

    setCargando(true);
    setErrorCredenciales(false);
    setErrorServidor("");

    try {
      const usuario = await iniciarSesion(gmail, password);

      if (usuario.rol === "administrador") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setErrorCredenciales(true);
      } else {
        setErrorServidor(
          error.response?.data?.error ||
          "No se pudo conectar con el servidor."
        );
      }
    } finally {
      setCargando(false);
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
              {cargando && (<p role="status">Iniciando sesión...</p>)}
              {errorServidor && (<p role="alert" className="text-danger">{errorServidor}</p>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
