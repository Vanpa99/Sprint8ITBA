import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import styles from "../../pages/Prestamos.module.css";
import InputField from "../UI/InputField";

function PrestamosCard({
  dato,
  isDelete = false,
  empleado = true,
  handleDeletePrestamo,
}) {
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
      {empleado && (
        <InputField
          label="Cliente:"
          value={dato.cliente_nombre}
          className={styles.inputField}
          disabled={true}
        />
      )}
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
  empleado: PropTypes.bool,
  handleDeletePrestamo: PropTypes.func,
};
