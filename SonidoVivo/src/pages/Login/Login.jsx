import LoginTemplate from "../../components/templates/LoginTemplate";

const handLogin = (credenciales) => {
    console.log("Datos del login:", credenciales);
  };

function Login() {
  return (
    <div className="contenedor-login">
      <LoginTemplate onLoginSubmit={handLogin} />
    </div>
  );
}

export default Login;
