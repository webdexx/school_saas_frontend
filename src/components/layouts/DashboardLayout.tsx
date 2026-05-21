import Navbar from "@/components/organisms/Navbar";
import Sidebar from "@/components/organisms/Sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  return (

      <div className="flex h-screen bg-gray-50">
        <Sidebar />

        <div className="flex flex-col flex-1 gap-2 overflow-hidden">      
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6 bg-white rounded-xl">
          {children}
        </main>
        </div>
      </div>
  );
};

export default DashboardLayout;