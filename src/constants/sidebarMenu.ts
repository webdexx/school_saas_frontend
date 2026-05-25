import {
  LuLayoutDashboard,
  LuBell,
  LuUsers,
  LuGraduationCap,
  LuCalendarDays,
  LuClipboardCheck,
  LuFileText,
  LuChartBarDecreasing,
  LuIndianRupee,
  LuBadgeCheck,
  LuMessageCircle,
  LuCalendar,
  LuSettings,
} from "react-icons/lu";

export const adminMenu = {
  overview: [
    { icon: LuLayoutDashboard, label: "Dashboard", active: true, path: "/" },
    { icon: LuBell, label: "Announcements", badge: 3, badgeType: "alert" as const, path: "/announcements" },
  ],
  academic: [
    { icon: LuUsers, label: "Students", badge: 842, badgeType: "neutral" as const, path: "/students"},
    { icon: LuGraduationCap, label: "Teachers", path: "/teachers" },
    { icon: LuCalendarDays, label: "Classes & Timetable", path: "/time-table" },
    { icon: LuClipboardCheck, label: "Attendance", path: "/attendance" },
    { icon: LuFileText, label: "Examinations", path: "/examinations" },
    { icon: LuChartBarDecreasing, label: "Performance Reports", path: "/reports" },
  ],
  administration: [
    { icon: LuIndianRupee, label: "Fees & Finance", path: "/finance" },
    { icon: LuBadgeCheck, label: "Staff Management", path: "/staff-management" },
    {
      icon: LuMessageCircle,
      label: "Parent Communication",
      badge: 7,
      badgeType: "alert" as const,
      path: "/communication"
    },
    { icon: LuCalendar, label: "Events & Calendar", path: "/calendar" },
  ],
  system: [{ icon: LuSettings, label: "Settings", path: "/settings" }],
};

export const principalMenu = {
  overview: [
    { icon: LuLayoutDashboard, label: "Dashboard", active: true },
    { icon: LuBell, label: "Announcements", badge: 3, badgeType: "alert" as const },
  ],
  academic: [
    { icon: LuUsers, label: "Students", badge: 842, badgeType: "neutral" as const },
    { icon: LuGraduationCap, label: "Teachers" },
    { icon: LuCalendarDays, label: "Classes & Timetable" },
    { icon: LuClipboardCheck, label: "Attendance" },
    { icon: LuFileText, label: "Examinations" },
    { icon: LuChartBarDecreasing, label: "Performance Reports" },
  ],
  administration: [
    { icon: LuIndianRupee, label: "Fees & Finance" },
    { icon: LuBadgeCheck, label: "Staff Management" },
    {
      icon: LuMessageCircle,
      label: "Parent Communication",
      badge: 7,
      badgeType: "alert" as const,
    },
    { icon: LuCalendar, label: "Events & Calendar" },
  ],
  system: [{ icon: LuSettings, label: "Settings" }],
};
