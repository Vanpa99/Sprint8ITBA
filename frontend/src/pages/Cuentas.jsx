import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import CuentasCard from "../components/cuenta/CuentasCard";

function Cuentas({ cliente }) {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    api
      .get(`cliente/saldo/`)
      .then(({ data }) => setDatos(data))
      .catch(({ err }) => console.error(err));
  }, [cliente]);

  return (
    <section>
      <h4>Cuentas</h4>

      {datos.map((dato, index) => (
        <CuentasCard key={index} dato={dato} />
      ))}
    </section>
  );
}
export default Cuentas;

Cuentas.propTypes = {
  cliente: PropTypes.object,
};
