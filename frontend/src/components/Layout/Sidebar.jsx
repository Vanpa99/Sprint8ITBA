import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
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
          </ul>
        </nav>
      </aside>
    );
  }
  
  export default Sidebar;
  