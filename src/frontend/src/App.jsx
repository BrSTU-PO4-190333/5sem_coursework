import { Switch, Route } from "react-router";

import "./App.css";
import Nav from "./components/Nav/Nav";
import Login from "./components/SingIn/SingIn";
import Logout from "./components/Logout/Logout";
import Error404 from "./components/Error404/Error404";
import Products from "./components/Products/Products";

function App() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/products" component={Products} />
                <Route component={Error404} />
            </Switch>
        </div>
    );
}

export default App;
