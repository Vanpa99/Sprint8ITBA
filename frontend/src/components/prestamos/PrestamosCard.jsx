import PropTypes from "prop-types";

function PrestamosCard({ dato }) {
  return (
    <div>
      <p> Tipo de Prestamos: {dato.tipo_prestamo} </p>
      <p> Monto: {dato.monto} </p>
      <p> Monto: {dato.monto} </p>
    </div>
  );
}
export default PrestamosCard;

PrestamosCard.propTypes = {
  dato: PropTypes.object,
};
