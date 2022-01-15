import logo from "./logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from "./Nav.module.css";

function Nav(props) {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
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
  );
}

export default Nav;
