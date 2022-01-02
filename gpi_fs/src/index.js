import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import GpiApp from './components/gpi_app/gpi_app';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    (
        <React.StrictMode>
            <Router>
                <GpiApp />
            </Router>
        </React.StrictMode>
    ),
    document.getElementById('root')
);
