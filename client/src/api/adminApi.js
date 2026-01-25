import api from "./axios";

export const getAllUsers = async () => {
  const { data } = await api.get("/admin/users", {
    withCredentials: true,
  });
  return data;
};

export const updateUserRole = async () => {
  const { id, role } = await api.get(
    `/admin/users/${id}/role`,
    { role },
    {
      withCredentials: true,
    },
  );
};
