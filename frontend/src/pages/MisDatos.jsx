import { useState } from "react";
import api from "../api/axiosConfig";
import InputField from "../components/UI/InputField";
import { HiMiniPencilSquare } from "react-icons/hi2";
import styles from "./MisDatos.module.css";
const ClienteDatos = () => {
  const cliente = JSON.parse(localStorage.getItem("user"));

  const [direccion, setDireccion] = useState(cliente.direccion);
  const [cambiar, setCambiar] = useState(true);

  const transform = { direccion };

  const handleSubmit = () => {
    api
      .patch(`cliente/${cliente.id}/modificar-direccion/`, transform)
      .then(({ data }) => {
        localStorage.setItem("user", JSON.stringify(data));
        alert("El cambio se realizo con exito");
      })
      .catch(({ err }) => {
        console.log(err);
        alert("Hubo un error, intentelo mas tarde");
      });
  };

  const handleChange = (e) => {
    setDireccion(e.target.value);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.sectionTitle}>Datos del Cliente</h2>
      <div>
        <InputField
          label="Nombre: "
          value={cliente.nombre} 
          disabled={true}
          className={styles.inputField}
        />

        <InputField
          label="Apellido: "
          value={cliente.apellido}
          disabled={true}
          className={styles.inputField}
        />

        <InputField
          label="Telefono: "
          value={cliente.telefono}
          disabled={true}
          className={styles.inputField}
        />

        <InputField
          label="Email: "
          value={cliente.email}
          disabled={true}
          className={styles.inputField}
        />

        <InputField 
          label="DNI: " 
          value={cliente.dni} 
          disabled={true} 
          className={styles.inputField} 
        />

        <div className={styles.contInput}>
          <InputField
            label="Direccion: "
            value={direccion}
            disabled={cambiar}
            onChange={handleChange}
            className={styles.inputField}
          />
          <button onClick={() => setCambiar(false)}>
            <HiMiniPencilSquare />
          </button>
        </div>
      </div>

      <button className={styles.boton} onClick={handleSubmit}>Guardar cambios</button>
    </div>
  );
};

export default ClienteDatos;
