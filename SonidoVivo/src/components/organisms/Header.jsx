import { NavLink } from "react-router-dom";
import LogoHeader from "../atoms/header/LogoHeader";
import TextoHeader from "../atoms/header/TextoHeader";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BotonCarrito } from "../atoms/header/BotonCarrito";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      sticky="top"
      className="contenedor-header"
    >
      <Container
        fluid
        className="px-3 position-relative d-flex flex-column align-items-stretch"
      >
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
        <Navbar.Collapse
          id="menu-navegacion"
          className="w-100 justify-content-lg-end"
        >
          <Nav className="gap-3 my-3 my-lg-0 align-items-center ms-lg-auto">
            <Nav.Link as={NavLink} to="/admin" className="text-white p-0" title="Administrar productos del catálogo">
              Administrar Productos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/movimientos" className="text-white p-0" title="Ver movimientos">
              <span className="me-2">Movimientos</span>
              <span className="text-white-50">|</span>
            </Nav.Link>

            <Nav.Link as={NavLink} to="/" className="text-white p-0" title="Ir al menú principal">
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/catalogo" className="text-white p-0" title="Ir al catálogo">
              Catálogo
            </Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros" className="text-white p-0" title="Ver quienes somos">
              Nosotros
            </Nav.Link>
            <Nav.Link as={NavLink} to="#contacto" className="text-white p-0" title="Contactarse con nosotros">
              Contacto
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login" className="text-white p-0" title="Iniciar Sesión">
              Iniciar Sesión
            </Nav.Link>
            <Nav.Link as={NavLink} to="/carrito" className="text-white p-0">
              <BotonCarrito />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
