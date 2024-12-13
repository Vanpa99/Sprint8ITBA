import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import api from "../../api/axiosConfig";

function PrestamosCard({ dato, isDelete = false }) {
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
    <div>
      <p> Tipo de Prestamos: {dato.tipo_prestamo} </p>
      <p> Monto: {dato.monto} </p>
      <p> Cliente: {dato.cliente} </p>
      {isDelete && (
        <button onClick={handleDeletePrestamo}>
          {" "}
          <FaTrash />{" "}
        </button>
      )}
    </div>
  );
}
export default PrestamosCard;

PrestamosCard.propTypes = {
  dato: PropTypes.object,
  isDelete: PropTypes.bool,
};
