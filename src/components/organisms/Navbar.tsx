import { useState, useEffect, useRef } from "react";
import {
  LuSearch,
  LuMail,
  LuBell,
  LuCalendar,
  LuChevronDown,
  LuMenu,
  LuLogOut,
  LuUser,
  LuCreditCard,
  LuPalette,
} from "react-icons/lu";
import { user } from "@/constants/userRole";
import { useSidebarStore } from "@/store/useSidebarStore";
import { NavLink } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";

const Navbar = () => {
  const { toggleSidebar } = useSidebarStore();

  const [search, setSearch] = useState("");
  const [activeLink, setActiveLink] = useState("Home");
  const [profileMenu, setProfileMenu] = useState(false);

  const { logout } = useAuth();

  const navLinks = ["Home", "Timetable", "Exams"];

  const initials = [user.firstname?.[0], user.lastname?.[0]]
    .filter(Boolean)
    .join("")
    .toUpperCase();

  // const token = localStorage.getItem("token");

  const toggleProfile = () => {
    setProfileMenu(!profileMenu);
  };
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    const handleLogout = async () => {
     try {
     await logout();
    } catch (error) {
      console.log("Error Occurred While Logout", error);
    }
    };
  

  return (
    <nav className="relative flex items-center gap-3 bg-sky-700 h-14 pe-4">
      <button onClick={toggleSidebar}>
        <LuMenu size={24} className="text-sky-50/70 cursor-pointer" />
      </button>
      {/* Search */}
      <div className="flex items-center gap-2 bg-sky-800 border border-sky-300/30 rounded-lg px-3 h-9 w-sm">
        <LuSearch size={16} className="text-sky-300/50" />
        <input
          type="text"
          placeholder="Search students, classes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none text-sky-200 placeholder-sky-200/40 text-sm lg:w-full md:w-md sm:w-sm"
        />
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-2 ml-4">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => setActiveLink(link)}
            className={`text-sm px-5 py-1 rounded-md transition-all duration-150 cursor-pointer
              ${
                activeLink === link
                  ? "bg-white/10 text-white border border-sky-300/40"
                  : "text-sky-200/70 hover:bg-white/8 hover:text-sky-100 border border-transparent"
              }`}
          >
            {link}
          </button>
        ))}
      </div>

      <div className="flex-1" />

      {/* Term Indicator */}
      <div className="flex items-center gap-2 bg-white/7 border border-sky-300/15 rounded-lg px-3 py-1">
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-sky-200 text-xs">Term · 2026-27</span>
      </div>

      <div className="w-px h-6 bg-sky-300/15" />

      {/* Action Icons */}
      <div className="flex items-center gap-2">
        {/* Messages */}
        <button className="relative grid place-items-center w-9 h-9 rounded-lg bg-sky-800 border border-sky-300/15 text-sky-300 hover:bg-sky-900 transition-all">
          <LuMail size={17} />
          {/* <span className="absolute top-1 animate-ping right-1 w-3 h-3 rounded-full bg-sky-200 border-2 border-green-200" /> */}
          <span className="absolute top-1 animate-pulse right-1 w-3 h-3 rounded-full bg-sky-100 border-2 border-sky-700" />
        </button>

        {/* Notifications */}
        <button className="relative grid place-items-center w-9 h-9 rounded-lg bg-sky-800 border border-sky-300/15 text-sky-300 hover:bg-sky-900 transition-all">
          <LuBell size={17} />
          <span className="absolute top-1 animate-pulse right-1 w-3 h-3 rounded-full bg-sky-100 border-2 border-sky-700" />
        </button>

        {/* Calendar */}
        <button className="relative grid place-items-center w-9 h-9 rounded-lg bg-sky-800 border border-sky-300/15 text-sky-300 hover:bg-sky-900 transition-all">
          <LuCalendar size={17} />
        </button>
      </div>

      <div className="w-px h-6 bg-sky-300/15" />

      {/* User Profile */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleProfile}
          className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/8 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-sky-900 border border-sky-300/30 grid place-items-center text-sky-100 text-xs font-medium">
            {initials}
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sky-100 text-sm font-medium leading-tight">
              {user.firstname + " " + user.lastname}
            </span>
            <span className="text-sky-300/55 text-xs leading-tight">
              {user.role.toLocaleUpperCase()}
            </span>
          </div>
          <LuChevronDown size={14} className="text-sky-300/40" />
        </button>

        {profileMenu && (
          <div className="absolute right-3 top-[calc(100%+8px)] w-60 bg-white dark:bg-neutral-900 border border-black/8 dark:border-white/10 rounded-xl shadow-lg overflow-hidden z-50">
            {/* Profile header */}
            <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-black/6 dark:border-white/8">
              <div className="w-9 h-9 rounded-full bg-sky-100 dark:bg-sky-900 grid place-items-center text-sky-700 dark:text-sky-300 text-[13px] font-medium shrink-0">
                {initials}
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-medium text-neutral-900 dark:text-white truncate leading-tight">
                  {user.firstname} {user.lastname}
                </p>
                <p className="text-[11px] text-neutral-400 truncate leading-tight">
                  {user.role}
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="p-1.5">
              {[
                {
                  icon: LuUser,
                  label: "Account",
                  sub: "Profile & preferences",
                  href: "/account",
                },
                {
                  icon: LuCreditCard,
                  label: "Billing",
                  sub: "Plans & payments",
                  href: "/billing",
                },
                {
                  icon: LuPalette,
                  label: "Theme",
                  sub: "Light, dark, system",
                  href: "/theme",
                },
              ].map(({ icon: Icon, label, sub, href }) => (
                <NavLink
                  key={label}
                  to={href}
                  className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-neutral-100 dark:bg-white/8 grid place-items-center shrink-0">
                    <Icon
                      size={15}
                      className="text-neutral-500 dark:text-white/50"
                    />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-neutral-800 dark:text-white leading-tight">
                      {label}
                    </p>
                    <p className="text-[11px] text-neutral-400 leading-tight">
                      {sub}
                    </p>
                  </div>
                </NavLink>
              ))}
            </div>

            {/* Logout */}
            <div className="p-1.5 border-t border-black/6 dark:border-white/8">
              <button className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors group">
                <div className="w-7 h-7 rounded-lg bg-rose-50 dark:bg-rose-500/10 grid place-items-center shrink-0">
                  <LuLogOut size={15} className="text-rose-500" />
                </div>
                <p onClick={handleLogout} className="text-[13px] font-medium text-rose-500">Log out</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
