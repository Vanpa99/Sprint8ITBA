import PropTypes from "prop-types";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

function Header({ handleLogout }) {

  const navigate = useNavigate();

  const handleLogoutAndRedirect = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <header className={"styles.encabezado"}>
      <div className={"styles.logo"}>
        {/* <Image src={Logo} alt="Logo de la Empresa" height={50} /> */}
      </div>
      <h2 className={"styles.saludo"}>¡Bienvenido!</h2>
      <Button
        onClick={handleLogoutAndRedirect}
        text="Cerrar sesión"
        className={"styles.noFlex"}
      />
    </header>
  );
}

export default Header;

Header.propTypes = {
  handleLogout: PropTypes.func,
};
