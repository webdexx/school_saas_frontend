import {
  useEffect,
  useState,
} from "react";

import { AuthContext } from "@/providers/AuthContext";
import type { User } from "@/providers/AuthContext";

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] =
    useState<User | null>(null);

      

  const login = (userData: User) => {
    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");

    setUser(null);
  };

  useEffect(() => {
    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

    return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};