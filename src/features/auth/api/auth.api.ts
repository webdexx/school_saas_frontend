import { api } from "@/lib/api";

type LoginResponse = {
  user: {
    id: string;
    email: string; 
    role: string;
    org_id: string;
  };
  message: string;
}

export const login = async (
  email: string,
  password: string,
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/auth/login", {
      email: email,
      password: password,
  });

  return response.data;
};

export const logout = async (): Promise<void> => {
  await api.post("/auth/logout");
}