import PropTypes from "prop-types";
import { useState } from "react";
import api from "../../api/axiosConfig";
import styles from "../../pages/Sucursales.module.css";

function SucursalesCard({ sucursal, cliente }) {
  const [prestamoSuc, setPrestamoSuc] = useState(null);
  const [modal, setModal] = useState(false);

  const handleInfoSucursal = () => {
    setModal(!modal);

    if (!prestamoSuc) {
      api
        .get(`prestamos/sucursal/${sucursal.id}`)
        .then(({ data }) => setPrestamoSuc(data))
        .catch(({ err }) => console.error(err));
      console.log("Hola");
    }
  };

  return (
    <>
      <button className={styles.sucursalCard}
        disabled={cliente?.rol === "cliente" && false}
        onClick={handleInfoSucursal}
      >
        <h4>Sucursal: {sucursal.nombre} </h4>
        <h4>Direccion: {sucursal.direccion} </h4>
        <h4>Telefono: {sucursal.telefono} </h4>
      </button>

      {modal &&
        prestamoSuc?.map((prestamo) => (
          <button 
            className={styles.sucursalCard} 
            onClick={() => setModal(false)} 
            key={prestamo.id}>
            <p>Monto Generado: {prestamo.monto}</p>
            <p>Tipo de prestamo Generado: {prestamo.tipo_prestamo}</p>
            <p>Cliente: {prestamo.cliente}</p>
          </button>
        ))}
    </>
  );
}
export default SucursalesCard;

SucursalesCard.propTypes = {
  cliente: PropTypes.object,
  sucursal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    direccion: PropTypes.string.isRequired,
    telefono: PropTypes.string.isRequired,
  }),
};
