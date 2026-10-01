import "../../pages/Login/Login.css";
import "../templates/LoginTemplate.css";
import TextoFooter from "../atoms/TextoFooter.jsx";

const Footer = () => {
  return (
    <div className="contenedor-footer">
      <footer className="template-footer">
        <div className="footer-title">
          <TextoFooter />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
