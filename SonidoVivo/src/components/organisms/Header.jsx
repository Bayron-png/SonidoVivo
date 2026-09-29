import LogoHeader from "../atoms/LogoHeader";
import TextoHeader from "../atoms/TextoHeader";
import "../../pages/Login/Login.css";
import "../templates/LoginTemplate.css";

const Header = () => {
  return (
    <div clasName="contenedor-header">
      <header className="template-header">
        <LogoHeader />
        <div className="header-title">
          <TextoHeader />
        </div>
      </header>
    </div>
  );
};

export default Header;
