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
import Pagar from "./pages/Pagar";
import Prestamos from "./pages/Prestamos";

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
                <Route path="/cuentas" element={<Cuentas />} />
                <Route path="/pagar" element={<Pagar />} />
                <Route path="/prestamos" element={<Prestamos />} />
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