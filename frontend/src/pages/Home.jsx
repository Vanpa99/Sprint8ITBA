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

        <li>Obtener saldo de tus cuentas bancarias (Clientes autenticados).</li>

        <li>
          Consultar el monto total de tus préstamos (Clientes autenticados).
        </li>

        <Link to="/sucursales">
          <li>Listar préstamos por sucursal (Empleados autenticados).</li>
        </Link>

        <li>
          Listar las tarjetas de crédito asociadas a un cliente (Empleados
          autenticados).
        </li>

        <li>
          Generar solicitudes de préstamos para clientes (Empleados
          autenticados).
        </li>

        <li>
          Anular solicitudes de préstamos de clientes (Empleados autenticados).
        </li>

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
