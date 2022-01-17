import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, Route, Switch} from "react-router-dom";
import ActivityList from "./components/ActivityList";
import ActivityAdd from "./components/ActivityAdd";
import Activity from "./components/Activity";

const App = () => {
  return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          {/*<a href="/activities" className="navbar-brand">*/}
          {/*  Activities*/}
          {/*</a>*/}
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/activities"} className="nav-link">
                Activities
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/activities"]} component={ActivityList} />
            <Route exact path="/activities/add" component={ActivityAdd} />
            <Route path="/activities/:id" component={Activity} />
          </Switch>
        </div>
      </div>
  );
}

export default App;
