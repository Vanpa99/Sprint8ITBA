import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api/axiosConfig";
import PrestamosCard from "../components/prestamos/PrestamosCard";

function Prestamos({ cliente }) {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    api
      .get(`cliente/prestamos/`)
      .then(({ data }) => setDatos(data))
      .catch(({ err }) => console.error(err));
  }, [cliente]);

  return (
    <div>
      <h2>Prestamos</h2>

      {datos.map((dato) => (
        <PrestamosCard key={dato.id} dato={dato} empleado = {false} />
      ))}
    </div>
  );
}
export default Prestamos;

Prestamos.propTypes = {
  cliente: PropTypes.object,
};
