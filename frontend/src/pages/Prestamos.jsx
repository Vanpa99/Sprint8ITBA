import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api/axiosConfig";
import PrestamosCard from "../components/prestamos/PrestamosCard";
import styles from "./Prestamos.module.css";

function Prestamos({ cliente }) {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    api
      .get(`cliente/prestamos/`)
      .then(({ data }) => setDatos(data))
      .catch(({ err }) => console.error(err));
  }, [cliente]);

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.sectionTitle}>Prestamos</h2>

      {datos.map((dato) => (
        <PrestamosCard key={dato.id} dato={dato} />
      ))}
    </div>
  );
}
export default Prestamos;

Prestamos.propTypes = {
  cliente: PropTypes.object,
};
