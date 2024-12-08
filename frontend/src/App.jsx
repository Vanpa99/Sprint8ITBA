import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ClienteDatos from "./components/ClienteDatos";
import Login from "./components/sesion/Login";
import Home from "./components/Home";
import PrivateRoutes from "./components/auth/PrivateAuth";
import Page404 from "./components/sesion/Page404";

function App() {
  return (
    <Router>
      {/* <div className={styles.contenedor}> */}
      {/* <Sidebar /> */}
      {/* <div className={styles.areaPrincipal}> */}

      <Routes>
        {/* RUTAS PUBLICAS */}
        <Route path="/login" element={<Login />} />

        {/* RUTAS PRIVADAS */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* <Route path="/cuentas" element={<Cuentas />} />
              <Route path="/pagar" element={<Pagar />} />
              <Route path="/prestamos" element={<Prestamos />} /> */}

        <Route path="*" element={<Page404 />} />
      </Routes>
      {/* </div>
        </div> */}
    </Router>
  );
}

export default App;
