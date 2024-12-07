import { useState } from "react";
import api, { setBasicAuth } from "../api/axiosConfig";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBasicAuth(username, password); // Configura las credenciales

    try {
      const response = await api.get("clientes/"); // Realiza una solicitud protegida

      console.log(response.statusText);
      // Aquí puedes redirigir al usuario o almacenar el estado de autenticación
    } catch (err) {
      setError("Credenciales inválidas");
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
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
