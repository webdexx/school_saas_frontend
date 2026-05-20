import { navbarMenu } from "@/constants/navbarMenu";

const Navbar = () => {
    return (
        <div className="flex gap-10 bg-amber-100 justify-center-safe h-12">
            {navbarMenu.map((item) => (
                <button key={item.id} className="rounded-md mx-2 text-left hover:bg-cyan-50 py-2">{item.label}</button>
            ))}
        </div>
    )
};

export default Navbar;