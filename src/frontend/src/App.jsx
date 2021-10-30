import { Switch, Route } from "react-router";
import {
    faEye,
    // faFolderOpen,
    // faPlus,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

import "./App.css";
import styles from "./App.module.css";
import Nav from "./components/Nav/Nav.jsx";
// import PageOpenFile from "./components/PageOpenFile/PageOpenFile.jsx";
// import PageAddProduct from "./components/PageAddProduct/PageAddProduct.jsx";
import PageViewProducts from "./components/GetProducts/GetProducts.jsx";
import PageUpdateProduct from "./components/PageUpdateProduct/PageUpdateProduct.jsx";
import PageLogin from "./components/SingIn/SingIn.jsx";
import PageLogout from "./components/PageLogout/PageLogout.jsx";

function App() {
    let list = [
        // {
        //     "Name": "Open file",
        //     "Href": "/open-file",
        //     "Icon": faFolderOpen,
        //     "Component": <PageOpenFile />,
        // },
        // {
        //     "Name": "Add product",
        //     "Href": "/add-product",
        //     "Icon": faPlus,
        //     "Component": <PageAddProduct />,
        // },
        {
            "Name": "View products",
            "Href": "/view-products",
            "Icon": faEye,
            "Component": <PageViewProducts />,
        },
        {
            "Name": "Logout",
            "Href": "/logout",
            "Icon": faSignOutAlt,
            "Component": <PageLogout />,
        },
    ];

    return (
        <div className={styles.App}>
            <div className={styles.App__nav}>
                <Nav list={list} />
            </div>
            <div className={styles.App__content}>
                <Switch>
                    <Route exact path="/">
                        <PageLogin />
                    </Route>
                    <Route path="/update-product">
                        <PageUpdateProduct />
                    </Route>
                    {
                        list.map(
                            (value, index) => (
                                <Route key={index} path={value["Href"]}>
                                    {value["Component"]}
                                </Route>
                            )
                        )
                    }
                </Switch>
            </div>
        </div>
    );
}

export default App;
