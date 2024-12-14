import { useEffect } from "react";
import api from "../api/axiosConfig";
import { useState } from "react";
import PrestamosCard from "../components/prestamos/PrestamosCard";
import styles from "./Prestamos.module.css";
import InputField from "../components/UI/InputField";

function PrestamosEmpleados() {
  const [clientes, setClientes] = useState(null);
  const [sucursales, setSucursales] = useState(null);
  const [prestamos, setPrestamos] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const tipoPrestamo = e.target.elements.tipo.value;
    const monto = e.target.elements.monto.value;
    const clienteId = e.target.elements.cliente.value;
    const sucursalId = e.target.elements.sucursal.value;

    if (!clienteId || !tipoPrestamo || !monto || !sucursalId) {
      alert("Por favor, ingrese todos los datos");
    }

    if (monto <= 0) alert("Unicamente valores positivos para el monto");

    api
      .post("prestamos/", {
        cliente: clienteId,
        monto: monto,
        tipo_prestamo: tipoPrestamo,
        sucursal: sucursalId,
      })
      .then(() => alert("Prestamo creado con exito"))
      .catch((err) =>
        console.log("Ocurrio un error, intentelo mas tarde", err)
      );
  };

  useEffect(() => {
    api
      .get("clientes/")
      .then(({ data }) => setClientes(data))
      .catch((err) => console.log(err));

    api
      .get("sucursales/")
      .then(({ data }) => setSucursales(data))
      .catch((err) => console.log(err));

    api
      .get("prestamos/")
      .then(({ data }) => setPrestamos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <div className={styles.formContainer}>
      <h2 className={styles.sectionTitle}>
        Generar un prestamo para un cliente
      </h2>

      <form className={styles.card} onSubmit={handleSubmit}>
        <div>
          
          <label>
            Cliente:
            <select className={styles.inputField} name="cliente" id="cliente">
              <option>Selecciona un cliente</option>
              {clientes?.map((cliente) => (
                <option key={cliente.id} value={cliente.id}>
                  {cliente.nombre} {cliente.apellido}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Tipo de Prestamo:
            <select className={styles.inputField} name="tipo" id="tipo">
              <option value="PERSONAL">Personal</option>
              <option value="PRENDARIO">Prendario</option>
              <option value="HIPOTECARIO">Hipotecario</option>
            </select>
          </label>
        </div>
        <div>
          <InputField
            label="Monto:"
            type="number"
            name="monto" id="monto"
            className={styles.inputField}
            />
        </div>
        <div>
          <label>
            Sucursal:
            <select className={styles.inputField} name="sucursal" id="sucursal">
              <option>Selecciona una sucursal</option>
              {sucursales?.map((sucursal) => (
                <option key={sucursal.id} value={sucursal.id}>
                  {sucursal.nombre}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button className={styles.boton} type="submit">Generar Prestamo</button>
      </form>

    </div>

      <div className={styles.formContainer}>
        <h2 className={styles.sectionTitle}>Eliminar el prestamo de un cliente</h2>
        {prestamos?.map((prestamo) => (
          <PrestamosCard key={prestamo.id} dato={prestamo} isDelete={true} />
        ))}
      </div>
      </>
  );
}
export default PrestamosEmpleados;
