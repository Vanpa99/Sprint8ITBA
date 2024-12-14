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

    api
      .post("clientes/", data)
      .then(() => {
        console.log("Exitoso");
        alert("Usuario creado con exito, puede iniciar sesion!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Hubo un problema, intentelo de nuevo");
      });
  };

  return (
    <div className={registro.formContainer}>
      <h2 className={registro.sectionTitle}>Registrarse</h2>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Nombre de usuario:"
          name="username"
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
          label="Email:"
          type="text"
          name="email"
          placeholder="Ingresa tu email"
          className={registro.inputField}
          required
        />

        <InputField
          label="Nombre:"
          type="text"
          name="name"
          placeholder="Ingresa su nombre"
          className={registro.inputField}
          required
        />
        <InputField
          label="Apellido:"
          type="text"
          name="surname"
          placeholder="Ingresa su apellido"
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

/* // <div class="formContainer">
    // <h2 class="sectionTitle">Registrarse</h2>
    // <form method="post">

    // username = forms.CharField(
    //     label="Nombre de usuario",
    // )

    // password1 = forms.CharField(
    //         attrs={'class': 'inputField'}), 
    //     label="Contraseña"
    // )

    // password2 = forms.CharField(
    //         attrs={'class': 'inputField'}), 
    //         label="Repite la contraseña"
    // )
    
    // nombre = forms.CharField(
    //     label="Nombre",
    //     widget=forms.TextInput(attrs={'class': 'inputField'})
    // )

    // apellido = forms.CharField(
    //     label="Apellido",
    //     widget=forms.TextInput(attrs={'class': 'inputField'})
    // )

    // dni = forms.CharField(
    //     label="DNI",
    //     widget=forms.TextInput(attrs={'class': 'inputField'})
    // )



    //     <div class="btnContainer">
    //         <button type="submit">Registrarse</button>
    //     </div>
    // </form>

    //     <p class="pregunta">
    //         ¿Ya tienes una cuenta? 
    //         <a href="{% url 'login' %}">¡Inicia sesión!</a>
    //     </p>

    // </div> */
