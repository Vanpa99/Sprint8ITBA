import PropTypes from "prop-types";
import Button from "../UI/Button";

function Header({ handleLogout }) {
  return (
    <header className={"styles.encabezado"}>
      <div className={"styles.logo"}>
        {/* <Image src={Logo} alt="Logo de la Empresa" height={50} /> */}
      </div>
      <h2 className={"styles.saludo"}>¡Bienvenido!</h2>
      <Button
        onClick={handleLogout}
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
