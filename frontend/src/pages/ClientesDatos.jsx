import { useState, useEffect } from "react";
import apiClient from "../api/axios";

const ClienteDatos = () => {
  const [cliente, setCliente] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const response = await apiClient.get("clientes/", {
          auth: {
            username: "vanpa", // Reemplaza con tus credenciales
            password: "123",
          },
        });
        setCliente(response.data);
      } catch (err) {
        setError("No se pudo obtener la información del cliente");
        console.error(err);
      }
    };

    fetchCliente();
  }, []);

  return (
    <div>
      <h1>Datos del Cliente</h1>
      {error && <p>{error}</p>}
      {cliente ? (
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
        </div>
      ) : (
        !error && <p>Cargando...</p>
      )}
    </div>
  );
};

export default ClienteDatos;
