import * as React from "react";
import ReactDOM from "react-dom";

import { Router, Link } from "@reach/router";
import Users from "./components/Users";
import User from "./components/User";
import EditUser from "./components/EditUser";
import AddUser from "./components/AddUser";
import DeleteUser from "./components/DeleteUser";

const App = () => {
    const [apiKey, setApiKey] = React.useState(
        "AIzaSyA5CDBcbdSMC9u61UrCRat6nP4n2pWiqR0"
    );

    return (
        <div>
            <header>
                <Link to="/">List Users</Link>
                <Link to="/users/add">Add New User</Link>
            </header>
            <label>Api Key</label>
            <input
                name="api_key"
                value={apiKey}
                onChange={e => setApiKey(e.target.value)}
                type="text"
            ></input>
            <Router>
                <Users path="/" apiKey={apiKey} />
                <User path="/users/:id" apiKey={apiKey} />
                <EditUser path="/users/:id/edit" apiKey={apiKey} />
                <AddUser path="/users/add" apiKey={apiKey} />
                <DeleteUser path="/users/:id/delete" apiKey={apiKey} />
            </Router>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
