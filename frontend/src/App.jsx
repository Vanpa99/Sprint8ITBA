import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/sesion/Login";
import Registro from "./components/sesion/Registro";
import Page404 from "./components/sesion/Page404";
import Sidebar from "./components/Layout/Sidebar";
import "./styles/global.css";
import { useState } from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Cuentas from "./pages/Cuentas";
import Prestamos from "./pages/Prestamos";
import Sucursales from "./pages/Sucursales";
import MisDatos from "./pages/MisDatos";
import Tarjetas from "./pages/Tarjetas";
import PrestamosEmpleados from "./pages/PrestamosEmpleados";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <>
          <Header handleLogout={handleLogout} />
          <div className="contenedor">
            <Sidebar />
            <div className="areaPrincipal">
              <Routes>
                <Route path="/inicio" element={<Home />} />
                <Route path="/mis-datos" element={<MisDatos />} />
                <Route path="/cuentas" element={<Cuentas />} />
                <Route path="/prestamos" element={<Prestamos />} />
                <Route path="/sucursales" element={<Sucursales />} />
                <Route path="/tarjetas" element={<Tarjetas />} />
                <Route path="/pretamos" element={<Prestamos />} />
                <Route
                  path="/prestamos-empleados"
                  element={<PrestamosEmpleados />}
                />
                <Route path="*" element={<Page404 />} />
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
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
