import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const user = localStorage.getItem("user");

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}
export default PrivateRoutes;
