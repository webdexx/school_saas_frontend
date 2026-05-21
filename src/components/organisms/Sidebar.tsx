import { sidebarMenu } from "@/constants/sidebarMenu";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 border-r p-4">
      <h2 className="mb-6 text-xl font-bold">
        Menu
      </h2>

      <div className="flex flex-col gap-2">
        {sidebarMenu.map((item) => (
          <button
            key={item.id}
            className="rounded-md p-2 text-left hover:bg-gray-100"
          >
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;