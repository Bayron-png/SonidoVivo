import LogoHeader from "../atoms/header/LogoHeader";
import TextoHeader from "../atoms/header/TextoHeader";
import { Navbar, Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar sticky="top" className="contenedor-header">
      <Container>
        <Row className="w-100 align-items-center">
          <Col xs={3} className="d-flex justify-content-start">
            <LogoHeader />
          </Col>
          <Col xs={6} className="text-center">
            <TextoHeader />
          </Col>
          <Col xs={3} />
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;