// constants/sidebarMenu.ts
import { ROUTES } from "./routes";

export type UserRole = "admin" | "superadmin" | "principal" | "student" | "teacher" | "parent" | "accountant";

export interface MenuSection {
  id: string;
  label: string;
  items: (typeof ROUTES)[string][];
}

type RoleMenu = MenuSection[];

const r = (key: keyof typeof ROUTES) => ROUTES[key]; // shorthand

export const ROLE_MENUS: Record<UserRole, RoleMenu> = {
  superadmin: [
    {
      id: "overview",
      label: "Overview",
      items: [r("dashboard"), r("announcements"), r("notifications")],
    },
    {
      id: "management",
      label: "Management",
      items: [r("students"), r("teachers"), r("staffManagement")],
    },
    {
      id: "Money",
      label: "Money",
      items: [r("finance"), r("moneyReports")],
    },
    {
      id: "system",
      label: "System",
      items: [r("settings")],
    },
  ],

  admin: [
    {
      id: "overview",
      label: "Overview",
      items: [r("dashboard"), r("announcements")],
    },
    {
      id: "academic",
      label: "Academic",
      items: [r("students"), r("teachers"), r("timetable"), r("attendance"), r("examinations"), r("reports")],
    },
    {
      id: "administration",
      label: "Administration",
      items: [r("finance"), r("staffManagement"), r("communication"), r("calendar")],
    },
    {
      id: "system",
      label: "System",
      items: [r("settings")],
    },
  ],

  principal: [
    {
      id: "overview",
      label: "Overview",
      items: [r("dashboard"), r("announcements")],
    },
    {
      id: "academic",
      label: "Academic",
      items: [r("students"), r("teachers"), r("timetable"), r("attendance"), r("examinations"), r("reports")],
    },
    {
      id: "administration",
      label: "Administration",
      items: [r("communication"), r("calendar")],
    },
    {
      id: "system",
      label: "System",
      items: [r("settings")],
    },
  ],

  teacher: [
    {
      id: "overview",
      label: "Overview",
      items: [r("dashboard"), r("announcements")],
    },
    {
      id: "academic",
      label: "Academic",
      items: [r("timetable"), r("attendance"), r("examinations"), r("reports")],
    },
    {
      id: "system",
      label: "System",
      items: [r("settings")],
    },
  ],

  student: [
    {
      id: "overview",
      label: "Overview",
      items: [r("dashboard"), r("announcements")],
    },
    {
      id: "academic",
      label: "Academic",
      items: [r("timetable"), r("attendance"), r("examinations"), r("reports")],
    },
    {
      id: "system",
      label: "System",
      items: [r("settings")],
    },
  ],

  parent: [
    {
      id: "overview",
      label: "Overview",
      items: [r("dashboard"), r("announcements")],
    },
    {
      id: "academics",
      label: "Academics",
      items: [r("attendance"), r("reports"), r("examinations")],
    },
    {
      id: "communication",
      label: "Communication",
      items: [r("communication"), r("calendar")],
    },
    {
      id: "finance",
      label: "Finance",
      items: [r("finance")],
    },
  ],

  accountant: [
    {
      id: "overview",
      label: "Overview",
      items: [r("dashboard")],
    },
    {
      id: "finance",
      label: "Finance",
      items: [r("finance")],
    },
    {
      id: "system",
      label: "System",
      items: [r("settings")],
    },
  ],
};