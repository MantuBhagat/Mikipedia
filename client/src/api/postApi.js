import api from "./axios";

export const fetchAllPosts = async () => {
  
  const res = await api.get("/posts");
  return res.data.posts;
};
