import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL ,
});

export const getRecommendation = async (query) => {
  const res = await API.post("/api/recommend", { query });
  return res.data;
};

