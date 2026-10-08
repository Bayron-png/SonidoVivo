import { NavLink } from "react-router-dom";
import LogoHeader from "../atoms/header/LogoHeader";
import TextoHeader from "../atoms/header/TextoHeader";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" sticky="top" className="contenedor-header">
      <Container fluid className="px-3 position-relative d-flex flex-column align-items-stretch">
        
        {/* 1. FILA SUPERIOR: Mantiene Logo, Título y Hamburguesa alineados arriba en todo momento */}
        <div className="w-100 d-flex align-items-center justify-content-between position-relative py-1">
          
          {/* Logo a la izquierda */}
          <div className="d-flex align-items-center">
            <Navbar.Brand as={NavLink} to="/" className="m-0 p-0">
              <LogoHeader />
            </Navbar.Brand>
          </div>

          {/* Título centrado exactamente en el medio de la fila superior */}
          <div 
            className="position-absolute start-50 top-50 translate-middle text-center"
            style={{ pointerEvents: "none", zIndex: 1 }}
          >
            <TextoHeader />
          </div>

          {/* Botón hamburguesa a la derecha */}
          <Navbar.Toggle aria-controls="menu-navegacion" className="ms-auto" />
        </div>

        {/* 2. MENÚ DESPLEGABLE: Se coloca ABAJO de la fila superior en móviles */}
        <Navbar.Collapse id="menu-navegacion" className="w-100 justify-content-lg-end">
          <Nav className="gap-3 my-3 my-lg-0 align-items-center ms-lg-auto">
            <Nav.Link as={NavLink} to="/" className="text-white p-0">
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/catalogo" className="text-white p-0">
              Catálogo
            </Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros" className="text-white p-0">
              Nosotros
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto" className="text-white p-0">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;