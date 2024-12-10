import { useEffect } from "react";
import api from "../api/axiosConfig";

function Cuentas({ cliente }) {
  useEffect(() => {
    api.get(`cliente/${cliente.id}`);
  }, [cliente]);

  return <div></div>;
}
export default Cuentas;

Cuentas.propTypes = {
  cliente: String,
};
