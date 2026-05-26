import {
  useState,
} from "react";

import { AuthContext } from "@/providers/AuthContext";
import type { Auth } from "@/providers/AuthContext";

import { login as loginApi } from "@/features/auth/api/auth.api"

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] =
    useState<Auth | null>(null);
  const [isLoading, setIsLoading] = useState(false);
      

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const authData = await loginApi(email, password);
      setUser(authData);
      localStorage.setItem("token", authData.token);
      console.log("Auth Token:", authData.token);
    } catch (error) {
      console.log("Error Occured:", error)
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");

    setUser(null);
  };

    return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};