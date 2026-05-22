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
    { icon: LuLayoutDashboard, label: "Dashboard", active: true },
    { icon: LuBell, label: "Announcements", badge: 3, badgeType: "alert" as const },
  ],
  academic: [
    { icon: LuUsers, label: "Students", badge: 842, badgeType: "neutral" as const},
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
