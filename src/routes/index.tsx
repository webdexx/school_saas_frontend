import { createBrowserRouter } from "react-router-dom";

import LoginPage from "@/features/auth/pages/LoginPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";

import DashboardLayout from "@/components/layouts/DashboardLayout";

import ProtectedRoute from "./ProtectedRoute";

import StudentsPage from "@/features/students/pages/StudentsPage"
import TeachersPage from "@/features/teachers/pages/TeachersPage";
import ParentsPage from "@/features/parents/pages/ParentsPage";

const isAuthenticated = true;

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/",
    element: (
      <ProtectedRoute isAuthenticated={isAuthenticated}>
        <DashboardLayout>
          <DashboardPage />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/students",
    element: (
      <ProtectedRoute isAuthenticated={isAuthenticated}>
        <DashboardLayout>
          <StudentsPage />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
    {
    path: "/teachers",
    element: (
      <ProtectedRoute isAuthenticated={isAuthenticated}>
        <DashboardLayout>
          <TeachersPage />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
    {
    path: "/parents",
    element: (
      <ProtectedRoute isAuthenticated={isAuthenticated}>
        <DashboardLayout>
          <ParentsPage />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  //   {
  //   path: "/students",
  //   element: (
  //     <ProtectedRoute isAuthenticated={isAuthenticated}>
  //       <DashboardLayout>
  //         <StudentsPage />
  //       </DashboardLayout>
  //     </ProtectedRoute>
  //   ),
  // },
]);
