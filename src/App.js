import Headerbar from "./components/Headerbar/Headerbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/subpages/users/Users";
import {
  Switch,
  BrowserRouter as Router,
  Route
} from "react-router-dom"

import "./App.css"



function App() {
  return (
    <Router>
      <Headerbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/all-users" component={Users}>
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
