import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function MenuNavegacion() {
  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      className="menu-navegacion"
    >
      <Container>
        

        <Navbar.Toggle aria-controls="menu-principal" />

        <Navbar.Collapse id="menu-principal">
          <Nav as="nav" className="ms-auto" aria-label="Menú principal">
            <Nav.Link as={NavLink} to="/" end>
              Inicio
            </Nav.Link>

            <Nav.Link as={NavLink} to="/catalogo">
              Catálogo
            </Nav.Link>

            <Nav.Link as={NavLink} to="/login">
              Iniciar sesión
            </Nav.Link>

            <Nav.Link as={NavLink} to="/register">
              Registrarse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNavegacion;