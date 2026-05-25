import {
  createContext,
} from "react";

export type User = {
  id: number;
  name: string;
  role: string;
};

type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

export const AuthContext =
  createContext<AuthContextType | null>(
    null
);