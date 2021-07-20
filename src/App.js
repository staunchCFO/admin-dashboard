import Headerbar from "./components/Headerbar/Headerbar";
import Sidebar from "./components/Sidebar/Sidebar";

import "./App.css"

function App() {
  return (
    <div>
      <Headerbar />
      <div className="container">
        <Sidebar />
        <div className="other">Other</div>
      </div>
    </div>
  );
}

export default App;
