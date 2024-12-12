import { useState } from "react";
import api from "../api/axiosConfig";
import InputField from "../components/UI/InputField";
import { HiMiniPencilSquare } from "react-icons/hi2";
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
    <div>
      <h1>Datos del Cliente</h1>
      <div>
        <p>
          <strong>Nombre:</strong> {cliente.nombre}
        </p>
        <p>
          <strong>Email:</strong> {cliente.email}
        </p>
        <p>
          <strong>DNI:</strong> {cliente.dni}
        </p>
        <div className="DISPLAY FLEX">
          <InputField
            label="Direccion: "
            value={direccion}
            disabled={cambiar}
            onChange={handleChange}
          />
          <button onClick={() => setCambiar(false)}>
            <HiMiniPencilSquare />
          </button>
        </div>
      </div>

      <button onClick={handleSubmit}> Guardar cambios </button>
    </div>
  );
};

export default ClienteDatos;
