// constants/routes.ts
import {
  LuLayoutDashboard, LuBell, LuUsers, LuGraduationCap,
  LuCalendarDays, LuClipboardCheck, LuFileText,
  LuChartBarDecreasing, LuIndianRupee, LuBadgeCheck,
  LuMessageCircle, LuCalendar, LuSettings,
  LuBellElectric,
  LuReceiptIndianRupee,
  LuBook,
} from "react-icons/lu";
import type { IconType } from "react-icons";

export interface RouteDefinition {
  id: string;
  icon: IconType;
  label: string;
  path: string;
  badgeType?: "alert" | "neutral";
  // badge count is intentionally excluded — fetch it dynamically
}

export const ROUTES: Record<string, RouteDefinition> = {
  dashboard:           { id: "dashboard",           icon: LuLayoutDashboard,    label: "Dashboard",            path: "/" },
  announcements:       { id: "announcements",       icon: LuBell,               label: "Announcements",        path: "/announcements",     badgeType: "alert" },
  students:            { id: "students",            icon: LuUsers,              label: "Students",             path: "/students",          badgeType: "neutral" },
  subjects:            { id: "subjects",            icon: LuBook,              label: "Subjects",             path: "/subjects",          badgeType: "neutral" },
  teachers:            { id: "teachers",            icon: LuGraduationCap,      label: "Teachers",             path: "/teachers" },
  timetable:           { id: "timetable",           icon: LuCalendarDays,       label: "Classes & Timetable",  path: "/time-table" },
  attendance:          { id: "attendance",          icon: LuClipboardCheck,     label: "Attendance",           path: "/attendance" },
  examinations:        { id: "examinations",        icon: LuFileText,           label: "Examinations",         path: "/examinations" },
  reports:             { id: "reports",             icon: LuChartBarDecreasing, label: "Performance Reports",  path: "/reports" },
  finance:             { id: "finance",             icon: LuIndianRupee,        label: "Fees & Finance",       path: "/finance" },
  staffManagement:     { id: "staffManagement",     icon: LuBadgeCheck,         label: "Staff Management",     path: "/staff-management" },
  communication:       { id: "communication",       icon: LuMessageCircle,      label: "Parent Communication", path: "/communication",     badgeType: "alert" },
  calendar:            { id: "calendar",            icon: LuCalendar,           label: "Events & Calendar",    path: "/calendar" },
  settings:            { id: "settings",            icon: LuSettings,           label: "Settings",             path: "/settings" },
  notifications:       { id: "notifications",       icon: LuBellElectric,       label: "Notifications",       path: "/notifications"},
  moneyReports:        { id: "moneyreports",        icon: LuReceiptIndianRupee, label: "Payment Reports",       path: "/money-management"}
};