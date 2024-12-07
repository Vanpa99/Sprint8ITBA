import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClienteDatos from "./components/ClienteDatos";
import Login from "./components/Login";

function App() {
  return (
    <Router>
        {/* <div className={styles.contenedor}> */}
          {/* <Sidebar /> */}
          {/* <div className={styles.areaPrincipal}> */}
            <Routes>
              <Route path="/" >
              </Route>
              {/* <Route path="/cuentas" element={<Cuentas />} />
              <Route path="/pagar" element={<Pagar />} />
              <Route path="/prestamos" element={<Prestamos />} /> */}
            </Routes>
          {/* </div>
        </div> */}
    <Login />

  </Router>

  );
}

export default App; 