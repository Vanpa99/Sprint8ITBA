import PropTypes from "prop-types";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/LogoITPowerBank.png";

function Header({ handleLogout }) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogoutAndRedirect = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <header className={styles.encabezado}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo de la Empresa" height={50} />
      </div>
      <h2 className={styles.saludo}>
        ¡Bienvenido, señor {user.rol} {user.nombre} !
      </h2>
      <Button
        onClick={handleLogoutAndRedirect}
        text="Cerrar sesión"
        className={styles.boton}
      />
    </header>
  );
}

export default Header;

Header.propTypes = {
  handleLogout: PropTypes.func,
};
