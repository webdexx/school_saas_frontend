import { api } from "@/lib/api";

type Auth = {
  token: string;
};

export const login = async (
  email: string,
  password: string,
): Promise<Auth> => {
  const response = await api.post("/auth/login", {
      email: email,
      password: password,
  });

  return response.data;
};