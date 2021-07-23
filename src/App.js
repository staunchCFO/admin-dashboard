import Headerbar from "./components/Headerbar/Headerbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/subpages/users/Users";
import SingleUser from "./pages/subpages/singleUser/SingleUser";
import NewUser from "./pages/subpages/newUser/NewUser";
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
          <Route path="/users" component={Users}>
            <Users />
          </Route>
          <Route path="/all-users/:userId" component={SingleUser}>
            <SingleUser />
          </Route>
          <Route path="/add-new-user" component={NewUser}>
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
