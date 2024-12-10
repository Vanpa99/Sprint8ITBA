import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api/axiosConfig";

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

      {datos.map((dato) => (
        <div key={dato.id}>
          <h4>Sucursal: {dato.nombre} </h4>
          <h4>Direccion: {dato.direccion} </h4>
          <h4>Telefono: {dato.telefono} </h4>
        </div>
      ))}
    </div>
  );
}
export default Sucursales;

Sucursales.propTypes = {
  cliente: PropTypes.object,
};
