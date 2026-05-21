import Navbar from "@/components/organisms/Navbar";
import Sidebar from "@/components/organisms/Sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  return (

      <div className="flex">
        <Sidebar />      
        <Navbar />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
  );
};

export default DashboardLayout;