import { useNavigate } from "react-router-dom";
import api from "../../api/axiosConfig";
import "../../styles/global.css";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import registro from "./registro.module.css";
function Registro() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const userData = {
      username: data.user,
      password: data.password,
    };

    const clienteData = {
      user: userData,
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      dni: data.dni,
      direccion: data.direccion,
      telefono: data.telefono,
    };

    api
      .post("clientes/", clienteData)
      .then(() => {
        console.log("Exitoso");
        alert("Usuario creado con exito, puede iniciar sesion!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response?.data);
        alert("Hubo un problema, intentelo de nuevo");
      });
  };

  return (
    <div className={registro.formContainer}>
      <h2 className={registro.sectionTitle}>Registrarse</h2>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Nombre de usuario:"
          name="user"
          type="text"
          placeholder="Ingresa tu nombre de usuario"
          className={registro.inputField}
          required
        />
        <InputField
          label="Contraseña:"
          type="password"
          name="password"
          placeholder="Ingresa su contraseña"
          className={registro.inputField}
          required
        />
        <InputField
          label="Nombre:"
          type="text"
          name="nombre"
          placeholder="Ingresa su nombre"
          className={registro.inputField}
          required
        />
        <InputField
          label="Apellido:"
          type="text"
          name="apellido"
          placeholder="Ingresa su apellido"
          className={registro.inputField}
          required
        />
        <InputField
          label="Email:"
          type="text"
          name="email"
          placeholder="Ingresa tu email"
          className={registro.inputField}
          required
        />

        <InputField
          label="DNI:"
          type="text"
          name="dni"
          placeholder="Ingresa tu DNI"
          className={registro.inputField}
          required
        />
        <InputField
          label="Dirección:"
          type="text"
          name="direccion"
          placeholder="Ingresa tu dirección"
          className={registro.inputField}
          required
        />
        <InputField
          label="Telefono:"
          type="text"
          name="telefono"
          placeholder="Ingresa tu telefono"
          className={registro.inputField}
          required
        />

        <Button text="Registrarse" className={registro.boton} type="submit" />
      </form>

      <p className={registro.pregunta}>
        ¿Ya tienes una cuenta?
        <a href="/">¡Iniciar sesión!</a>
      </p>
    </div>
  );
}

export default Registro;