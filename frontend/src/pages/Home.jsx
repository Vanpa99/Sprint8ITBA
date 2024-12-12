import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";
import Prestamos from "./Prestamos";
import Sucursales from "./Sucursales";
import { Link } from "react-router-dom";
function Home() {

  return (
    <>
      <h1>HOME</h1>
      {/* <Prestamos /> */}

      <ul>
          <li> <Link to="/mis-datos">Consultar tus datos personales</Link> (Clientes autenticados).</li>
          <li>Obtener saldo de tus cuentas bancarias (Clientes autenticados).</li>
          <li>Consultar el monto total de tus préstamos (Clientes autenticados).</li>
          <li>Listar préstamos por sucursal (Empleados autenticados).</li>
          <li>Listar las tarjetas de crédito asociadas a un cliente (Empleados autenticados).</li>
          <li>Generar solicitudes de préstamos para clientes (Empleados autenticados).</li>
          <li>Anular solicitudes de préstamos de clientes (Empleados autenticados).</li>
          <li>Modificar la dirección de un cliente (Clientes autenticados y empleados).</li>
          <li> <Link to="/sucursales">Consultar el listado de todas las sucursales </Link> (Público).</li>
      </ul>
    </>
  );
}
export default Home;
