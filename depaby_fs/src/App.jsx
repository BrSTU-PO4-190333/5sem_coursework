import { Route, Switch } from 'react-router';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import './App.css';

// pages
import Home from './components/pages/home/home';
import About from './components/pages/about/about';
import Products from './components/pages/products/products';
import Prices from './components/pages/prices/prices';
import Catalogs from './components/pages/catalogs/catalogs';
import Certificates from './components/pages/certificates/certificates';
import Contacts from './components/pages/contacts/contacts';
import Basket from './components/pages/basket/basket';

const pagesArray = [
  {
    href: '/about',
    caption: 'О нас',
    component: About,
  },
  {
    href: '/products',
    caption: 'Продукты',
    component: Products,
  },
  {
    href: '/prices',
    caption: 'Прайсы',
    component: Prices,
  },
  {
    href: '/catalogs',
    caption: 'Каталоги',
    component: Catalogs,
  },
  {
    href: '/certificates',
    caption: 'Сертификаты',
    component: Certificates,
  },
  {
    href: '/contacts',
    caption: 'Контакты',
    component: Contacts,
  },
  {
    href: '/basket',
    caption: 'Корзина',
    component: Basket,
  },
];

function GpiApp() {
  return (
    <div className='gpi_wrapper'>
      <div className='gpi_content'>
        <Nav pagesArray={pagesArray} />
        <Switch>
          <Route exact path="/" component={Home} />
          {
            pagesArray.map(function (value, index) {
              return (
                <Route
                  key={index}
                  path={value.href}
                  component={value.component}
                />
              );
            })
          }
        </Switch>
      </div>
      <div className='gpi_footer'>
        <Footer />
      </div>
    </div>
  );
}

export default GpiApp;
