import { useState } from "react";
import api, { setBasicAuth } from "../../api/axiosConfig";
import { useNavigate } from "react-router-dom";
import sesion from "../sesion/sesion.module.css";
import InputField from "../UI/InputField";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSession = async (e) => {
    e.preventDefault();
    setBasicAuth(username, password); // Configura las credenciales

    try {
      const response = await api.get("clientes/"); // Realiza una solicitud protegida
      const users = response.data;

      for (const user of users) {
        if ((user.user.username = username)) {
          localStorage.setItem("user", JSON.stringify(user));
        }
      }

      if (response.statusText === "OK") {
        navigate("/");
      }
    } catch (err) {
      setError("Credenciales inválidas");
      console.log("error");
    }
  };

  return (
    <div className={sesion.formContainer}>
      
      <h2 className={sesion.sectionTitle}>
          Iniciar Sesión
      </h2>

      <form onSubmit={handleSession} >
        
        <InputField
          className={sesion.inputField}
          label="Usuario:"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Ingresa tu nombre de usuario"
          required
          autoComplete="off"
        />

        <InputField
          className={sesion.inputField}
          label="Contraseña:"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresa tu contraseña"
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <Button 
          className={sesion.boton} 
          type="submit" 
          text="Iniciar Sesión" />

        <p>¿No tienes una cuenta? <Link to="/registro">¡Registrate!</Link></p>
        
      </form>
    </div>
  );
};

export default Login;
