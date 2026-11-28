import RegisterTemplate from "../../components/templates/RegisterTemplate";
import { registrarUsuario } from "../../services/auth";

const handRegister = ({ nombre, apellido, gmail, password }) => {
  return registrarUsuario({
    nombre,
    apellido,
    correo: gmail,
    password,
  });
};

function Register() {
  return (
    <div className="contenedor-login">
      <RegisterTemplate onRegisterSubmit={handRegister} />
    </div>
  );
}

export default Register;
