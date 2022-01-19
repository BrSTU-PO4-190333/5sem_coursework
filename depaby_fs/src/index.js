import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap-grid.min.css';

import App from './App';

ReactDOM.render(
    (
        <React.StrictMode>
            {
                process.env.REACT_APP_HashRouter === 'true' ? (
                    <HashRouter>
                        <App />
                    </HashRouter>
                ) : (
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                )
            }
        </React.StrictMode>
    ),
    document.getElementById('root')
);
