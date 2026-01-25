import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // 🔥 MUST
});

// api.interceptors.response.use(
//   (res) => res,
//   async (err) => {
//     const original = err.config;

//     if (err.response?.status === 401 && !original._retry) {
//       original._retry = true;

//       await api.post("/auth/refresh");
//       return api(original);
//     }

//     return Promise.reject(err);
//   },
// );

export default api;
