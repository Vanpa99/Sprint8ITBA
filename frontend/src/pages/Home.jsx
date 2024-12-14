import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <h2 className={styles.sectionTitle}>HOME</h2>

      <ul className={styles.serviceList}>
        <Link to="/mis-datos">
          <li>Consultar tus datos personales (Clientes autenticados).</li>
        </Link>

        <Link to="/cuentas">
          <li>
            Obtener saldo de tus cuentas bancarias (Clientes autenticados).
          </li>
        </Link>

        <Link to="/prestamos">
          <li>
            Consultar el monto total de tus préstamos (Clientes autenticados).
          </li>
        </Link>

        <Link to="/sucursales">
          <li>Listar préstamos por sucursal (Empleados autenticados).</li>
        </Link>

        <Link to="/tarjetas">
          <li>
            Listar las tarjetas de crédito asociadas a un cliente (Empleados autenticados).
          </li>
        </Link>

        <Link to="/prestamos-empleados">
          <li>
            Generar solicitudes de préstamos para clientes (Empleados
            autenticados).
          </li>
        </Link>

        <Link to="/prestamos-empleado">
          <li>
            Anular solicitudes de préstamos de clientes (Empleados autenticados).
          </li>
        </Link>

        <Link to="/mis-datos">
          <li>
            Modificar la dirección de un cliente (Clientes autenticados y
            empleados).
          </li>
        </Link>

        <Link to="/sucursales">
          <li>Consultar el listado de todas las sucursales (Público).</li>
        </Link>
      </ul>
    </>
  );
}
export default Home;
