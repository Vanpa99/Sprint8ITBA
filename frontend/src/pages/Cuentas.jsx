import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import CuentasCard from "../components/cuenta/CuentasCard";
import styles from "./Cuentas.module.css";

function Cuentas({ cliente }) {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    api
      .get(`cliente/saldo/`)
      .then(({ data }) => setDatos(data))
      .catch(({ err }) => console.error(err));
  }, [cliente]);

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.sectionTitle}>Cuentas</h2>

      {datos.map((dato, index) => (
        <CuentasCard key={index} dato={dato} />
      ))}
    </div>
  );
}
export default Cuentas;

Cuentas.propTypes = {
  cliente: PropTypes.object,
};
