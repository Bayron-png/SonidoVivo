import LogoHeader from "../atoms/header/LogoHeader";
import TextoHeader from "../atoms/header/TextoHeader";

const Header = () => {
  return (
    <div className="contenedor-header">
        <LogoHeader/>
        <TextoHeader/>
    </div>
  );
};

export default Header;
