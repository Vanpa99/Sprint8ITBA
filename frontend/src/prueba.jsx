<BrowserRouter>
<div className="contenedor">
  {/* Mostrar Header, Sidebar y Footer solo si el usuario está autenticado */}
  {isAuthenticated && <Header />}
  <div className="mainLayout">
    {isAuthenticated && <Sidebar />}
    <div className="areaPrincipal">
      <Routes>
        {/* RUTAS PÚBLICAS */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* REDIRECCIÓN INICIAL */}
        <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />} />

        {/* RUTAS PRIVADAS */}
        <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
          <Route path="/home" element={<Home />} />
          {/* OTRAS RUTAS PRIVADAS */}
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  </div>
  {isAuthenticated && <Footer />}
</div>
</BrowserRouter>
);