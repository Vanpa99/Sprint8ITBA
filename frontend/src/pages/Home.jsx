import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";
import ClienteDatos from "./ClientesDatos";
function Home() {
  //! VA EN HEADEAR, UNICAMENTE DE PRUEBA
  const navigate = useNavigate();

  const handleSession = () => {
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <>
      <h1>HOME</h1>
      <Button text="Cerrar Sesion" onClick={handleSession} type="button" />
      <ClienteDatos />
    </>
  );
}
export default Home;
