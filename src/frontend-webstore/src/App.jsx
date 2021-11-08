import { Route, Switch } from 'react-router';

import "./App.css";
import Products from "./components/Products/Products";

export default function App() {
    return (
        <Switch>
            <Route path="/" component={Products} />
        </Switch>
    );
}
