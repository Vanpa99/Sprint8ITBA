import { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import styles from "./Tarjetas.module.css";
import InputField from "../components/UI/InputField";

function Tarjetas() {
  const [tarjetas, setTarjetas] = useState(null);
  const [allTarjetas, setAllTarjetas] = useState(null);
  const [selectCliente, setSelectCliente] = useState("");
  const [all, setAll] = useState(false);

  const handleSelect = (e) => {
    const selectedCliente = e.target.value;
    setSelectCliente(selectedCliente);

    console.log(selectCliente);

    api
      .get(`tarjetas/cliente/${selectedCliente}/`)
      .then(({ data }) => setTarjetas(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    api
      .get(`tarjetas/`)
      .then(({ data }) => {
        setTarjetas(data);
        setAllTarjetas(data);
      })
      .catch(({ err }) => console.log(err.response));
  }, [all]);

  return (
    <>
      <select value={selectCliente} onChange={handleSelect}>
        <option value="">Seleccionar un cliente</option>
        {allTarjetas?.map((tarjeta) => (
          <option value={tarjeta.cliente} key={tarjeta.id}>
            Cliente : {tarjeta.cliente} {tarjeta.cliente_nombre}
          </option>
        ))}
      </select>

      <button onClick={() => setAll(!all)}>
        Todos los clientes con tarjetas
      </button>

      <div className={styles.fromContainer}>
        {tarjetas?.map((tarjeta) => (
          <div className={styles.card} key={tarjeta.id}>
            <h2 className={styles.sectionTitle}>
              {tarjeta.cliente_nombre} {tarjeta.cliente}
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
