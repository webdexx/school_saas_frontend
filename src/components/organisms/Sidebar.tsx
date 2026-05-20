import { sidebarMenu } from "@/constants/sidebarMenu";
import { useState } from "react";
 
const Sidebar = () => {
  const [active, setActive] = useState(sidebarMenu[0]?.id ?? null);
  const [collapsed, setCollapsed] = useState(false);
 
  return (
    <aside
      className={`relative flex flex-col h-screen transition-all duration-300 ease-in-out
        ${collapsed ? "w-[72px]" : "w-64"}
        bg-[#0f0f11] border-r border-white/5`}
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(139,92,246,0.08)_0%,_transparent_60%)] pointer-events-none" />
 
      {/* Header */}
      <div className="relative flex items-center justify-between px-4 pt-6 pb-5 border-b border-white/5">
        {!collapsed && (
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-white font-semibold text-[15px] tracking-tight">Nucleus</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`w-7 h-7 rounded-md flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/5 transition-all duration-200 ${collapsed ? "mx-auto" : ""}`}
        >
          <svg className={`w-4 h-4 transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
 
      {/* Navigation */}
      <nav className="relative flex-1 flex flex-col gap-0.5 px-2 py-4 overflow-y-auto">
        {!collapsed && (
          <p className="px-3 mb-2 text-[10px] font-medium tracking-widest uppercase text-white/20">
            Menu
          </p>
        )}
 
        {sidebarMenu.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              title={collapsed ? item.label : undefined}
              className={`relative group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 w-full text-left
                ${collapsed ? "justify-center" : ""}
                ${isActive
                  ? "bg-violet-500/15 text-violet-300"
                  : "text-white/40 hover:text-white/75 hover:bg-white/5"
                }`}
            >
              {/* Active indicator bar */}
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-violet-400" />
              )}
 
              {/* Icon */}
              <span className={`flex-shrink-0 w-4 h-4 ${isActive ? "text-violet-400" : "text-white/30 group-hover:text-white/60"} transition-colors duration-200`}>
                {item.icon ?? (
                  <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </span>
 
              {/* Label */}
              {!collapsed && (
                <span className="truncate">{item.label}</span>
              )}
 
              {/* Notification badge */}
              {!collapsed && item.badge && (
                <span className="ml-auto flex-shrink-0 text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
 
      {/* Footer / User profile */}
      <div className="relative px-2 py-3 border-t border-white/5">
        <button
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 group ${collapsed ? "justify-center" : ""}`}
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex-shrink-0 flex items-center justify-center text-[11px] font-semibold text-white shadow-md">
            JS
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0 text-left">
              <p className="text-[13px] font-medium text-white/70 truncate leading-tight">John Smith</p>
              <p className="text-[11px] text-white/25 truncate leading-tight">john@example.com</p>
            </div>
          )}
          {!collapsed && (
            <svg className="w-3.5 h-3.5 text-white/20 group-hover:text-white/40 transition-colors flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
      </div>
    </aside>
  );
};
 
export default Sidebar;