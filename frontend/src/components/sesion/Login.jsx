import { useState } from "react";
import api, { setBasicAuth } from "../../api/axiosConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSession = async (e) => {
    e.preventDefault();
    setBasicAuth(username, password); // Configura las credenciales

    try {
      const response = await api.get("cliente/datos/"); // Realiza una solicitud protegida
      const user = response.data;

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
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
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSession}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
