import type { UserRole } from "@/constants/sidebarMenu";

interface User {
  firstname: string;
  lastname: string;
  role: UserRole;
  org_name?: string;
}

export const user: User = {
  firstname: "Mohammed",
  lastname: "Aasif",
  role: "principal",
  org_name: "Emmanuel Mission School",
};