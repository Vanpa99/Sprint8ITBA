import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";
import ClienteDatos from "./ClientesDatos";
import Prestamos from "./Prestamos";
import Sucursales from "./Sucursales";
function Home() {

  return (
    <>
      <h1>HOME</h1>
      <ClienteDatos />
      <Prestamos />
      <Sucursales />
    </>
  );
}
export default Home;
