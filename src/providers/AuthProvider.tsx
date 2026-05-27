import { useState } from "react";
import { AuthContext } from "@/providers/AuthContext";
import type { User } from "@/providers/AuthContext";
import { login as loginApi, logout as logoutApi } from "@/features/auth/api/auth.api";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false); // true on mount while we check session

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { user } = await loginApi(email, password);
      setUser(user); // store user info, NOT the token
    } catch (error) {
      console.log("Error Occurred: ", error)
      throw error; // let the login form handle the error
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await logoutApi();
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoading,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};