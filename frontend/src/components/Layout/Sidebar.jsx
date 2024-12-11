import { Link } from "react-router-dom";

function Sidebar() {
    return (
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/Inicio">Inicio</Link>
            </li>
            <li>
              <Link to="/cuentas">Cuentas</Link>
            </li>
            <li>
              <Link to="/pagar">Pagar</Link>
            </li>
            <li>
              <Link to="/prestamos">Préstamos</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/mis-tarjetas">Mis Tarjetas</Link>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
  
  export default Sidebar;
  