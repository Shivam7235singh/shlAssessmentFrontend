import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",   // ✅ FIXED
});

export const getRecommendation = async (query) => {
  const res = await API.post("/api/recommend", { query });
  return res.data;
};

