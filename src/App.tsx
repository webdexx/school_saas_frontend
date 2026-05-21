import DashboardLayout from "./components/layouts/DashboardLayout";
import  DashboardCard  from "./components/molecules/DashboardCards";


function App() {
  return (
    <div>
      <DashboardLayout >
        <DashboardCard 
        title="Student"
        value={750}
        />

        <DashboardCard 
        title="Teachers"
        value={100}
        />

      </ DashboardLayout >
    </div>
  );
}

export default App;