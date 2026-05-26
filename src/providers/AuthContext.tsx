import {
  createContext
} from "react";

export type Auth = {
  token: string,
}

export type User = {
  id: number;
  name: string;
  role: string;
};

type AuthContextType = {
  user: Auth | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
};

export const AuthContext =
  createContext<AuthContextType | null>(
    null
);