import { Switch, Route } from "react-router";
import "./App.css";

import Home from './routes/home/home';
import Products from './routes/products/products';
import Error404 from "./routes/404/404";

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route component={Error404} />
        </Switch>
    );
}

export default App;
