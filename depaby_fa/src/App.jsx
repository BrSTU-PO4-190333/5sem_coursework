import { Switch, Route } from "react-router";
import "./App.css";

import Home from './routes/home/home';
import ProductsCategory from './routes/products-category/product-category';
import Products from './routes/products/products';
import Documents from './routes/documents/documents';
import Contacts from './routes/contacts/contacts';
import productCategories from './routes/productCategories/productCategories';
import Error404 from "./routes/404/404";
import LogIn from "./routes/login/login";
import LogOut from "./routes/logout/logout";

function App() {
    return (
        <Switch>
            <Route exact path="/" component={LogIn} />
            <Route path="/logout" component={LogOut} />
            <Route path="/menu" component={Home} />
            <Route path="/products/:category" component={ProductsCategory} />
            <Route path="/products" component={Products} />
            <Route path="/documents" component={Documents} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/productCategories" component={productCategories} />
            <Route component={Error404} />
        </Switch>
    );
}

export default App;
