import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";
import ClienteDatos from "./ClientesDatos";
import Prestamos from "./Prestamos";
import Sucursales from "./Sucursales";
function Home() {
  //! VA EN HEADEAR, UNICAMENTE DE PRUEBA
  const navigate = useNavigate();

  const handleSession = () => {
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <>
      <h1>HOME</h1>
      <Button text="Cerrar Sesion" onClick={handleSession} type="button" />
      <ClienteDatos />
      <Prestamos />
      <Sucursales />
    </>
  );
}
export default Home;
