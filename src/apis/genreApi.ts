import axios from "axios";
import { Genre } from "../types/genre";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    }
});

export const getAllGenres = async (): Promise<Genre[]> => {
    const response = await API.get<Genre[]>("/genres");
    console.log("RESPONSE DATA:", response.data); // ← THÊM LOG
    return response.data;
  };