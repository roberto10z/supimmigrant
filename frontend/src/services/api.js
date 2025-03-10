import axios from "axios";

const API_URL = "http://127.0.0.1:5000"; // URL do backend Node.js

export const getFlaskData = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/flask`);
    return response.data;
  } catch (error) {
    console.error("Erro ao conectar ao backend:", error);
    return null;
  }
};