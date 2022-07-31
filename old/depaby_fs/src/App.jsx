import { Route, Switch } from 'react-router';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './components/pages/home/home';
import Page404 from './components/pages/404/404';
import pages from './pages';
import './App.css';

function App() {
    return (
        <div className='gpi_wrapper'>
            <div className='gpi_content'>
                <Nav pages={pages} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    {
                        pages.map(function (value, index) {
                            return (
                                <Route
                                    key={index}
                                    path={value.href}
                                    component={value.component}
                                />
                            );
                        })
                    }
                    <Route component={Page404} />
                </Switch>
            </div>
            <div className='gpi_footer'>
                <Footer />
            </div>
        </div>
    );
}

export default App;
