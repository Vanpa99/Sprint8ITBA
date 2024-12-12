import { Link } from "react-router-dom";

function Page404() {
  return (
    <p>
      Debes <Link to="/">Iniciar Sesión</Link> o <Link to="/registro">Registrarte</Link> para acceder a esta página
      </p>
  );
  }
export default Page404;
