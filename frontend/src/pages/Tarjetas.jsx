import { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import styles from "./Tarjetas.module.css";
import InputField from "../components/UI/InputField";

function Tarjetas() {
  const [tarjetas, setTarjetas] = useState(null);

  const cliente = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    api
      .get(`tarjetas/cliente/${cliente.id}/`)
      .then(({ data }) => setTarjetas(data))
      .catch(({ err }) => console.log(err));
  }, []);

  return (
    <>
      <div className={styles.fromContainer}>
        {tarjetas?.map((tarjeta) => (
          <div className={styles.card} key={tarjeta.id}>
            <h2 className={styles.sectionTitle}> 
              {tarjeta.nombre_cliente}
            </h2>
            <InputField 
              label="Marca:"
              type="text"
              value={tarjeta.marca}
              disabled={true}
              className={styles.inputField}
            />
            <InputField 
              label="Tipo de tarjeta:"
              type="text"
              value={tarjeta.tipo_tarjeta}
              disabled={true}
              className={styles.inputField}
            />
            <InputField 
              label="Numero"
              type="text"
              value={tarjeta.numero}
              disabled={true}
              className={styles.inputField}
            />
            <InputField 
              label="Fecha de emision:"
              type="text"
              value={tarjeta.fecha_emicion}
              disabled={true}
              className={styles.inputField}
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default Tarjetas;
