import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ClienteDatos from "./components/ClienteDatos";
import Home from "./pages/Home";
import PrivateRoutes from "./components/auth/PrivateRoutes";
import Login from "./components/sesion/Login";
import Registro from "./components/sesion/Registro";
import Page404 from "./components/sesion/Page404";
import Sidebar from "./components/Layout/Sidebar";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <div className="contenedor">
      <Sidebar />
      <div className="areaPrincipal">

      <Routes>
        {/* RUTAS PUBLICAS */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* RUTAS PRIVADAS */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* <Route path="/cuentas" element={<Cuentas />} />
            <Route path="/pagar" element={<Pagar />} />
            <Route path="/prestamos" element={<Prestamos />} /> */}

        <Route path="*" element={<Page404 />} />
      </Routes>
      </div>
        </div>
    </Router>
  );
}

export default App;
