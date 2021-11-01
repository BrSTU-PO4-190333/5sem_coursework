import { Switch, Route } from "react-router";

import "./App.css";
import styles from "./App.module.css";
import Nav from "./components/Nav/Nav";
import Login from "./components/SingIn/SingIn";
import Logout from "./components/Logout/Logout";
import Error404 from "./components/Error404/Error404";
import Products__open from "./components/Products/Products__open/Products__open";
import Products__add from "./components/Products/Products__add/Products__add";
import Products__get from "./components/Products/Products__get/Products__get";
import Products__download_csv from "./components/Products/Products__download_csv/Products__download_csv";
import Products__download_json from "./components/Products/Products__download_json/Products__download_json";
import Products__edit from "./components/Products/Products__edit/Products__edit";

export default function App() {
    return (
        <div className={styles.App}>
            <Nav />
            <div className={styles.App__content}>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/logout" component={Logout} />
                    <Route exact path="/products" component={Products__get} />
                    <Route path="/products/open" component={Products__open} />
                    <Route path="/products/add" component={Products__add} />
                    <Route path="/products/get" component={Products__get} />
                    <Route path="/products/download-csv" component={Products__download_csv} />
                    <Route path="/products/download-json" component={Products__download_json} />
                    <Route path="/products/edit/:editID" component={Products__edit} />
                    <Route component={Error404} />
                </Switch>
            </div>
        </div>
    );
}
