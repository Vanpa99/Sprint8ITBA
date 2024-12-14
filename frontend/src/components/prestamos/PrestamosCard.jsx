import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import api from "../../api/axiosConfig";
import inputFields from "../UI/InputField";
import styles from "../../pages/Prestamos.module.css";
import InputField from "../UI/InputField";

function PrestamosCard({ dato, isDelete = false, empleado = true }) {
  const handleDeletePrestamo = () => {
    console.log(dato);
    api
      .post(`prestamos/${dato.id}/anular/`)
      .then(({ data }) => console.log(data))
      .catch((err) =>
        console.log("Ocurrio algo inesperado, intentelo mas tarde", err)
      );
  };

  return (
    <div className={styles.card}>
      <InputField
        label="Tipo de Prestamo:"
        value={dato.tipo_prestamo}
        className={styles.inputField}
        disabled={true}
      />
      <InputField 
        label="Monto:"
        value={dato.monto}
        className={styles.inputField}
        disabled={true}
      />
      <InputField 
        label="Cliente:"
        value={dato.cliente}
        className={styles.inputField}
        disabled={true}
      />
      {isDelete && (
        <button onClick={handleDeletePrestamo}>
          <FaTrash />
        </button>
      )}
    </div>
  );
}
export default PrestamosCard;

PrestamosCard.propTypes = {
  dato: PropTypes.object,
  isDelete: PropTypes.bool,
  empleado: PropTypes.bool
 };
