import axios from "axios";


const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api"}`
});

export const createUser = (data) => API.post("/users", data);
export const getUsers = () => API.get("/users");
