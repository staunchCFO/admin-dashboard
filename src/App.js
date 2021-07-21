import Headerbar from "./components/Headerbar/Headerbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";

import "./App.css"


function App() {
  return (
    <div>
      <Headerbar />
      <div className="container">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
