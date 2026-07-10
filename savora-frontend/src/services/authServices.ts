import api from "./api";
import type { LoginRequest } from "../types/auth";

export async function login(data: LoginRequest) {
  const response = await api.post("/auth/login", data);

  return response.data;
}