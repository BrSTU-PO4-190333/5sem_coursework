import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import "./GPI_App.css";
import styles from "./GPI_App.module.css";

import GPI_Home from "./GPI_Home";
import GPI_About from './GPI_About';
import GPI_Products from "./GPI_Products";
import GPI_Prices from './GPI_Prices';
import GPI_Catalogs from "./GPI_Catalogs";
import GPI_Certificates from './GPI_Certificates';
import GPI_Contacts from './GPI_Contacts';
import GPI_Basket from './GPI_Basket';

export default function App() {
    return (
        <div className={styles.gpi__app}>
            <header className={styles.gpi__header}>
                <nav className={`container ${styles.gpi__nav}`}>
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/products">Продукты</Link></li>
                        <li><Link to="/prices">Прайсы</Link></li>
                        <li><Link to="/catalogs">Каталоги</Link></li>
                        <li><Link to="/certificates">Сертификаты</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                        <li><Link to="/basket">Корзина</Link></li>
                    </ul>
                </nav>
            </header>
            <Switch>
                <Route exact path="/" component={GPI_Home} />
                <Route path="/about" component={GPI_About} />
                <Route path="/products" component={GPI_Products} />
                <Route path="/prices" component={GPI_Prices} />
                <Route path="/catalogs" component={GPI_Catalogs} />
                <Route path="/certificates" component={GPI_Certificates} />
                <Route path="/contacts" component={GPI_Contacts} />
                <Route path="/basket" component={GPI_Basket} />
            </Switch>
        </div>
    );
}
