import { sidebarMenu } from "@/constants/sidebarMenu";
import { LuSchool } from "react-icons/lu";

const Sidebar = () => {

  return (
    <aside className="h-full w-64 px-4 bg-sky-700 overflow-hidden">

      {/* Header */}
      <div className="px-5 pt-6 pb-1 border-b border-white/15">
        {/* School branding */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center">
            <LuSchool className="text-white w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-medium text-white leading-tight">Greenfield Academy</div>
            <div className="text-[11px] text-white/60">School Management System</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-4 pb-4 border-b border-white/15">
        {sidebarMenu.map((item) => (
          <button
            key={item.id}
            className="px-4 py-2 text-left flex items-center gap-1 text-sky-50 hover:text-sky-300 cursor-pointer"
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;