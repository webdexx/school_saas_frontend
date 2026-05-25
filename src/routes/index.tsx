import {
  createBrowserRouter,
} from "react-router-dom";

import LoginPage from "@/features/auth/pages/LoginPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";

import DashboardLayout from "@/components/layouts/DashboardLayout";

import ProtectedRoute from "./ProtectedRoute";

const isAuthenticated = true;

export const router =
  createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },

    {
      path: "/",
      element: (
        <ProtectedRoute
          isAuthenticated={
            isAuthenticated
          }
        >
          <DashboardLayout>
            <DashboardPage />
          </DashboardLayout>
        </ProtectedRoute>
      ),
    },
  ]);