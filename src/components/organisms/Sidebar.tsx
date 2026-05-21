import { sidebarMenu } from "@/constants/sidebarMenu";

const Sidebar = () => {
  return (
    <aside className="h-full w-64 p-4 bg-sky-800 overflow-hidden">
      <h2 className="mb-6 text-xl text-sky-50 font-bold flex gap-2 align-middle flex-col">
        User Name <span className="bg-sky-700 px-6 py-0.5 h-full w-fit rounded border border-sky-200 text-tiny">Role</span>
      </h2>

      <div className="flex flex-col gap-2">
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