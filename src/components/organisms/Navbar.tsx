import { navbarMenu } from "@/constants/navbarMenu";

const Navbar = () => {
  return (
    <div className="flex gap-10 justify-center-safe bg-sky-800 h-12 border-b border-b-sky-200">
      {navbarMenu.map((item) => (
        <button
          key={item.id}
          className="mx-2 text-left text-sky-100 hover:bg-sky-50 hover:text-sky-500 py-1 px-4 overflow-hidden"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
