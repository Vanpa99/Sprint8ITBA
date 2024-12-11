import {BrowserRouter, Routes, Route } from "react-router-dom";
// import ClienteDatos from "./components/ClienteDatos";
import Home from "./pages/Home";
// import PrivateRoutes from "./components/auth/PrivateRoutes";
import Login from "./components/sesion/Login";
import Registro from "./components/sesion/Registro";
import Page404 from "./components/sesion/Page404";
import Sidebar from "./components/Layout/Sidebar";
import "./styles/global.css";
import { useState } from "react";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <>
          <Header handleLogout={handleLogout} />
          <div className={styles.contenedor}>
            <Sidebar />
            <div className={styles.areaPrincipal}>
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/cuentas" element={<Cuentas />} />
                <Route path="/pagar" element={<Pagar />} />
                <Route path="/prestamos" element={<Prestamos />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </>
      ) : (
<Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="*" element={<Page404 />} />
        </Routes>      )}
    </BrowserRouter>
  );
}

export default App;
