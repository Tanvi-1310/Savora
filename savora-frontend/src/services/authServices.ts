import api from "./api";
import type { LoginRequest } from "../types/auth";

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role?: "admin" | "customer" | "kitchen";
}

export async function login(data: LoginRequest) {
  const response = await api.post("/auth/login", data);

  return response.data;
}

export async function register(data: RegisterRequest) {
  const response = await api.post("/auth/register", data);

  return response.data;
}
