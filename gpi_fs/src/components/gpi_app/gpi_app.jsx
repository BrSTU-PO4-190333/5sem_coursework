import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import GpiHome from './../gpi_home/gpi_home';
import GpiAboutUs from './../gpi_about/gpi_about';
import GpiProducts from './../gpi_products/gpi_products';
import GpiPrices from './../gpi_prices/gpi_prices';
import GpiCatalogs from './../gpi_catalogs/gpi_catalogs';
import GpiCertificates from './../gpi_certificates/gpi_certificates';
import GpiContacts from './../gpi_contacts/gpi_contacts';
import GpiBasket from './../gpi_basket/gpi_basket';
import "./gpi_app.css";
import styles from "./gpi_app.module.css";

function GpiApp() {
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
                <Route exact path="/" component={GpiHome} />
                <Route path="/about" component={GpiAboutUs} />
                <Route path="/products" component={GpiProducts} />
                <Route path="/prices" component={GpiPrices} />
                <Route path="/catalogs" component={GpiCatalogs} />
                <Route path="/certificates" component={GpiCertificates} />
                <Route path="/contacts" component={GpiContacts} />
                <Route path="/basket" component={GpiBasket} />
            </Switch>
        </div>
    );
}

export default GpiApp;
