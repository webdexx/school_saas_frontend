import { createContext } from "react";

export type User = {
  id: string;
  email: string;
  role: string;
  org_id: string;
  firstname: string;
  lastname: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);