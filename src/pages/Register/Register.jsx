import RegisterTemplate from "../../components/templates/RegisterTemplate";

const handRegister = (datosRegistro) => {
  console.log("Datos del registro:", datosRegistro);
};

function Register() {
  return (
    <div className="contenedor-login">
      <RegisterTemplate onRegisterSubmit={handRegister} />
    </div>
  );
}

export default Register;
