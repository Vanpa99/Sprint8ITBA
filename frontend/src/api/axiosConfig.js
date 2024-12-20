import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // Base URL de la API REST
  headers: {
    "Content-Type": "application/json",
  },
});

export const setBasicAuth = (username, password) => {
  const token = btoa(`${username}:${password}`);
  api.defaults.headers.common["Authorization"] = `Basic ${token}`;
};

export default api;
