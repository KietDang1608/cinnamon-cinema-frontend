import axios from "axios";
import { Movie } from "../types/movie";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllMovies = async (): Promise<Movie[]> => {
  const response = await API.get<Movie[]>("/movies");
  console.log("RESPONSE DATA:", response.data); // ← THÊM LOG
  return response.data;
};





