import axios from "axios";

const API = axios.create({
  baseURL: https://shl-assessment-rag-2-iz7j.onrender.com,  
});

export const getRecommendation = async (query) => {
  const res = await API.post("/api/recommend", { query });
  return res.data;
};

