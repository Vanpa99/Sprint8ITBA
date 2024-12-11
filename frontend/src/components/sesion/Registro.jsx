import InputField from "../UI/InputField";
import Button from "../UI/Button";
import registro from "./registro.module.css";
import "../../styles/global.css";
function Registro() {
    return ( 
        <div className={registro.formContainer}>

            <h2 className={registro.sectionTitle}>
                Registrarse
            </h2>

            <form >

                <InputField
                    label="Nombre de usuario:"
                    type="text"
                    placeholder="Ingresa tu nombre de usuario"
                    className={registro.inputField}
                    required
                />
                <InputField
                    label="Email:"
                    type="text"
                    placeholder="Ingresa tu email"
                    className={registro.inputField}
                    required
                />

                <InputField
                    label="Contraseña:"
                    type="password"
                    placeholder="Ingresa su contraseña"
                    className={registro.inputField}
                    required
                />
                <InputField
                    label="Nombre:"
                    type="text"
                    placeholder="Ingresa su nombre"
                    className={registro.inputField}
                    required
                />
                 <InputField
                    label="Apellido:"
                    type="text"
                    placeholder="Ingresa su apellido"
                    className={registro.inputField}
                    required
                />
                <InputField
                    label="DNI:"
                    type="text"
                    placeholder="Ingresa tu DNI"
                    className={registro.inputField}
                    required
                />
                <InputField
                    label="Dirección:"
                    type="text"
                    placeholder="Ingresa tu dirección"
                    className={registro.inputField}
                    required
                />
                <InputField
                    label="Telefono:"
                    type="text" 
                    placeholder="Ingresa tu telefono"
                    className={registro.inputField}
                    required
                />

                <Button 
                    text="Registrarse" 
                    className={registro.boton} 
                    type="submit" />
            </form>

            <p className={registro.pregunta}>
                ¿Ya tienes una cuenta? 
                <a href="/login">¡Iniciar sesión!</a>
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
