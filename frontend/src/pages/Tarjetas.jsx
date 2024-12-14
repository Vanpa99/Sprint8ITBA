import { useEffect, useState } from "react";
import api from "../api/axiosConfig";

function Tarjetas() {
  const [tarjetas, setTarjetas] = useState(null);

  const cliente = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    api
      .get(`tarjetas/cliente/${cliente.id}/`)
      .then(({ data }) => setTarjetas(data))
      .catch(({ err }) => console.log(err));
  }, [cliente]);

  return (
    <>
      <div>
        {tarjetas?.map((tarjeta) => (
          <div key={tarjeta.id}>
            <h4> {tarjeta.nombre_cliente} </h4>
            <p>{tarjeta.marca}</p>
            <p>{tarjeta.tipo_tarjeta}</p>
            <p>{tarjeta.numero}</p>
            <p>{tarjeta.fecha_emicion}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Tarjetas;
