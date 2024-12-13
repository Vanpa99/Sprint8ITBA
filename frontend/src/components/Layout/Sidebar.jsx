import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const cliente = JSON.parse(localStorage.getItem("user"));

  return (
    <aside className={styles.contNav}>
      <nav>
        <ul>
          <li>
            <Link to="/Inicio">Inicio</Link>
          </li>
          <li>
            <Link to="/mis-datos">Mis Datos</Link>
          </li>
          <li>
            <Link to="/cuentas">Cuentas</Link>
          </li>
          <li>
            <Link to="/sucursales">Sucursales</Link>
          </li>
          {cliente.rol !== "cliente" && (
            <li>
              <Link to="/tarjetas">Tarjetas</Link>
            </li>
          )}
          {cliente.rol !== "cliente" && (
            <li>
              <Link to="/generar_prestamos">Prestamos para clientes</Link>
            </li>
          )}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
