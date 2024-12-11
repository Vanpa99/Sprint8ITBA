import PropTypes from "prop-types";

function CuentasCard({ dato }) {
  return (
    <div>
      <p>Tipo de Cuenta {dato.tipo_cuenta}</p>
      <p>Saldo: {dato.saldo}</p>
    </div>
  );
}
export default CuentasCard;

CuentasCard.propTypes = {
  dato: PropTypes.object,
};
