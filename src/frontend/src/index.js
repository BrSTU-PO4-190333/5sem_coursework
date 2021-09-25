import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./components/App/App.jsx";

ReactDOM.render(
    (
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
    ),
    document.getElementById('root')
);
