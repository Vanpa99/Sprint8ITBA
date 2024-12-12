import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import ClienteDatos from "./components/ClienteDatos";
import Home from "./pages/Home";
// import PrivateRoutes from "./components/auth/PrivateRoutes";
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <>
          <Header handleLogout={handleLogout} />
          <div className={"styles.contenedor"}>
            <Sidebar />
            <div className={"styles.areaPrincipal"}>
              <Routes>
                <Route path="/inicio" element={<Home />} />
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
          <Route path="/" element={<Login onLogin={setIsAuthenticated} />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
