import api from "./api";

export const registerUser = (data) => api.post("/auth/register", data);

export const loginUser = async (data) => {
  const res = await api.post("/auth/login", data);
  localStorage.setItem("accessToken", res.data.accessToken);
  return res.data;
};

export const logoutUser = async () => {
  await api.post("/auth/logout");
  localStorage.removeItem("accessToken");
};
