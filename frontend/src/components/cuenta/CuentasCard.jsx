import PropTypes from "prop-types";
import InputField from "../UI/InputField";
import styles from "../../pages/Cuentas.module.css";

function CuentasCard({ dato }) {
  return (
    <div className={styles.card}>
      <InputField 
        label="Tipo de Cuenta:"
        className={styles.inputField}
        disabled
        value={dato.tipo_cuenta}
      />
      <InputField 
        label="Saldo:"
        className={styles.inputField}
        disabled
        value={dato.saldo}
      />
    </div>
  );
}
export default CuentasCard;

CuentasCard.propTypes = {
  dato: PropTypes.object,
};
