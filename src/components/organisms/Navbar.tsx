import { useState } from "react";
import {
  LuSearch,
  LuMail,
  LuBell,
  LuCalendar,
  LuChevronDown,
} from "react-icons/lu";
import { user } from "@/constants/userRole";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "Timetable", "Exams"];

   const initials = [user.firstname?.[0], user.lastname?.[0]]
    .filter(Boolean)
    .join("")
    .toUpperCase();

  return (
    <nav className="flex items-center gap-3 bg-sky-700 h-14 pe-4">

      {/* Search */}
      <div className="flex items-center gap-2 bg-sky-800 border border-sky-300/30 rounded-lg px-3 h-9 w-72">
        <LuSearch size={16} className="text-sky-300/50" />
        <input
          type="text"
          placeholder="Search students, classes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none text-sky-200 placeholder-sky-200/40 text-sm w-full"
        />
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-3 ml-14">
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
          <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-sky-100 border-2 border-sky-700" />
        </button>

        {/* Notifications */}
        <button className="relative grid place-items-center w-9 h-9 rounded-lg bg-sky-800 border border-sky-300/15 text-sky-300 hover:bg-sky-900 transition-all">
          <LuBell size={17} />
          <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-sky-100 border-2 border-sky-700" />
        </button>

        {/* Calendar */}
        <button className="relative grid place-items-center w-9 h-9 rounded-lg bg-sky-800 border border-sky-300/15 text-sky-300 hover:bg-sky-900 transition-all">
          <LuCalendar size={17} />
        </button>
      </div>

      <div className="w-px h-6 bg-sky-300/15" />

      {/* User Profile */}
      <button className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/8 transition-all">
        <div className="w-8 h-8 rounded-full bg-sky-900 border border-sky-300/30 grid place-items-center text-sky-100 text-xs font-medium">
          {initials}
        </div>
        <div className="flex flex-col text-left">
          <span className="text-sky-100 text-sm font-medium leading-tight">
            {user.firstname + " " + user.lastname}
          </span>
          <span className="text-sky-300/55 text-xs leading-tight">{user.role}</span>
        </div>
        <LuChevronDown size={14} className="text-sky-300/40" />
      </button>
    </nav>
  );
};

export default Navbar;
