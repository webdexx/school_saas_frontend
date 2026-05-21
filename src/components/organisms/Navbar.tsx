import { navbarMenu } from "@/constants/navbarMenu";
import { useState } from "react";
import { MdOutlineNotifications, MdOutlineNotificationsActive  } from "react-icons/md";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [notifications, setNotifications] = useState(true);

  const NotificationBell = notifications ? MdOutlineNotificationsActive : MdOutlineNotifications;

  return (
    <div className="flex justify-evenly bg-sky-800 h-14 py-2 pe-8">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-md px-4 min-w-64 w-sm h-10 outline-none bg-sky-900 border border-sky-200 shadow-sm placeholder-sky-200 text-sky-300"
      />
      <div className="flex text-sky-100">
        {navbarMenu.map((item) => (
          <button
            key={item.id}
            className="mx-2 text-left text-sky-100 hover:bg-sky-50 hover:text-sky-500 py-1 px-4 overflow-hidden"
          >
            {item.label}
          </button>
        ))}
        
        <button onClick={() => setNotifications(false)}>
          <NotificationBell size={20}/>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
