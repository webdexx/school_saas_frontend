import DashboardLayout from "./components/layouts/DashboardLayout";
import  DashboardCard  from "./components/molecules/DashboardCards";


function App() {
  return (
    <div>
      <DashboardLayout >
        <div className="flex gap-4">
        <DashboardCard 
        title="Student"
        value={750}
        />

        <DashboardCard 
        title="Teachers"
        value={100}
        />

        <DashboardCard 
        title="Teachers"
        value={100}
        />

        <DashboardCard 
        title="Teachers"
        value={100}
        />

        
        </div>

      </ DashboardLayout >
    </div>
  );
}

export default App;