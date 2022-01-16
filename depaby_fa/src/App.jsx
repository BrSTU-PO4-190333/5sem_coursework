import { Switch, Route } from "react-router";
import "./App.css";

import Products from './routes/products/products';
import Error404 from "./routes/404/404";

function App() {
    return (
        <Switch>
            <Route path="/products" component={Products} />
            <Route component={Error404} />
        </Switch>
    );
}

export default App;
