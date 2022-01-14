import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './components/pages/home/home';
import About from './components/pages/about/about';
import Products from './components/pages/products/products';
import Prices from './components/pages/prices/prices';
import Catalogs from './components/pages/catalogs/catalogs';
import Certificates from './components/pages/certificates/certificates';
import Contacts from './components/pages/contacts/contacts';
import Basket from './components/pages/basket/basket';
import "./App.css";
import styles from "./App.module.css";
import logo from "./logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

function GpiApp() {
    const [navIsOpen, setNavIsOpen] = useState(false);

    return (
        <div className={styles.App}>
            <header className={styles.Header}>
                <div className='container'>
                    <div className={styles.Nav_header}>
                        <div className={styles.Nav_header__bar}>
                            {/* <FontAwesomeIcon icon={faBars} /> */}
                        </div>
                        <div className={styles.Nav_header__logo}>
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <div className={styles.Nav_header__bar} onClick={event => setNavIsOpen(!navIsOpen)}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                </div>
                <nav
                    className={styles.Nav}
                    style={{
                        display: navIsOpen ? "block" : "none",
                    }}
                >
                    <ul>
                        <li><Link onClick={event => setNavIsOpen(!navIsOpen)} to="/">Главная</Link></li>
                        <li><Link onClick={event => setNavIsOpen(!navIsOpen)} to="/about">О нас</Link></li>
                        <li><Link onClick={event => setNavIsOpen(!navIsOpen)} to="/products">Продукты</Link></li>
                        <li><Link onClick={event => setNavIsOpen(!navIsOpen)} to="/prices">Прайсы</Link></li>
                        <li><Link onClick={event => setNavIsOpen(!navIsOpen)} to="/catalogs">Каталоги</Link></li>
                        <li><Link onClick={event => setNavIsOpen(!navIsOpen)} to="/certificates">Сертификаты</Link></li>
                        <li><Link onClick={event => setNavIsOpen(!navIsOpen)} to="/contacts">Контакты</Link></li>
                        <li><Link onClick={event => setNavIsOpen(!navIsOpen)} to="/basket">Корзина</Link></li>
                    </ul>
                </nav>
            </header>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/products" component={Products} />
                <Route path="/prices" component={Prices} />
                <Route path="/catalogs" component={Catalogs} />
                <Route path="/certificates" component={Certificates} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/basket" component={Basket} />
            </Switch>
        </div>
    );
}

export default GpiApp;
