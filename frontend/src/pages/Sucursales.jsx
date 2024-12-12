import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api/axiosConfig";
import SucursalesCard from "../components/sucursales/SucursalesCard";

function Sucursales({ cliente }) {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    api
      .get(`sucursales/`)
      .then(({ data }) => setDatos(data))
      .catch(({ err }) => console.error(err));
  }, [cliente]);

  return (
    <div>
      <h2>Todas nuestras Sucursales</h2>

      {datos &&
        datos.map((dato) => (
          <SucursalesCard key={dato.id} sucursal={dato} cliente={cliente} />
        ))}
    </div>
  );
}
export default Sucursales;

Sucursales.propTypes = {
  cliente: PropTypes.object,
};
