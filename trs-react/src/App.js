import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, Route, Switch} from "react-router-dom";
import EntryList from "./components/EntryList";
import EntryAdd from "./components/EntryAdd";
import Entry from "./components/Entry";
import Login from "./components/Login";
import Activities from "./components/Activities";

const App = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/login"} className="nav-link">
                            Login
                        </Link>
                        <Link to={"/activities"} className="nav-link">
                            Activities
                        </Link>

                        <Link to={"/entries"} className="nav-link">
                            Entries
                        </Link>

                        <Link to={"/entries/add"} className="nav-link">
                            Add new entry
                        </Link>
                    </li>
                </div>
            </nav>

            <div className="container mt-3">
                <Switch>
                    <Route exact path={["/", "/login"]} component={Login}/>
                    <Route exact path="/activities" component={Activities}/>

                    <Route exact path="/entries" component={EntryList}/>
                    <Route exact path="/entries/add" component={EntryAdd}/>
                    <Route path="/entries/details/:id" component={Entry}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
