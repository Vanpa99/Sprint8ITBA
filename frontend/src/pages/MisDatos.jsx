import Cuentas from "./Cuentas";

const ClienteDatos = () => {
  const cliente = JSON.parse(localStorage.getItem("user"));

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
        {/* <Cuentas cliente={cliente} /> */}
      </div>
    </div>
  );
};

export default ClienteDatos;
