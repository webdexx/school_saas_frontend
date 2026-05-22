import { adminMenu, principalMenu } from "@/constants/sidebarMenu";
import { LuSchool } from "react-icons/lu";
import type { IconType } from "react-icons";
import { user } from "@/constants/userRole";

interface NavItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  badge?: number;
  badgeType?: "alert" | "neutral";
}

interface NavSectionProps {
  label: string;
  items: NavItemProps[];
}

const NavItem = ({
  icon: Icon,
  label,
  active,
  badge,
  badgeType,
}: NavItemProps) => (
  <div
    className={`flex items-center gap-2.5 px-2.5 py-2.5 rounded-lg mb-0.5 cursor-pointer transition-colors
      ${active ? "bg-white/20" : "hover:bg-white/10"}`}
  >
    <Icon
      className={`w-4.5 h-4.5 shrink-0 ${active ? "text-white" : "text-white/75"}`}
    />
    <span
      className={`text-[13px] ${active ? "text-white font-medium" : "text-white/80"}`}
    >
      {label}
    </span>
    {badge && (
      <span
        className={`ml-auto text-[10px] font-medium px-1.5 py-0.5 rounded-full
          ${badgeType === "alert" ? "bg-rose-600 text-white" : "bg-white/15 text-white/70"}`}
      >
        {badge}
      </span>
    )}
  </div>
);

const NavSection = ({ label, items }: NavSectionProps) => (
  <div className="px-3 pt-3 pb-2">
    <p className="text-[10px] uppercase tracking-widest text-white/45 px-2 mb-1">
      {label}
    </p>
    {items.map((item) => (
      <NavItem key={item.label} {...item} />
    ))}
  </div>
);

const Divider = () => <div className="h-px bg-white/15 mx-3 my-1.5" />;

const Sidebar = () => {
  const menuType = user.role === "Admin" ? adminMenu : principalMenu;

  return (
    <aside className="h-full w-fit px-4 bg-sky-700 overflow-hidden">
      {/* Header */}
      <div className="pe-5 pt-6 pb-1 border-b border-white/15">
        {/* School branding */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center">
            <LuSchool className="text-white w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-medium text-white leading-tight">
              Greenfield Academy
            </div>
            <div className="text-[11px] text-white/60">
              School Management System
            </div>
          </div>
        </div>
      </div>

      <NavSection label="Overview" items={menuType.overview} />
      <Divider />
      <NavSection label="Academic" items={menuType.academic} />
      <Divider />
      <NavSection label="Administration" items={menuType.administration} />
      <Divider />
      <NavSection label="System" items={menuType.system} />

      {/* <div className="flex flex-col gap-2 pt-4 pb-4 border-b border-white/15">
        {sidebarMenu.map((item) => (
          <button
            key={item.id}
            className="px-4 py-2 text-left flex items-center gap-1 text-sky-50 hover:text-sky-300 cursor-pointer"
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </div> */}
    </aside>
  );
};

export default Sidebar;
