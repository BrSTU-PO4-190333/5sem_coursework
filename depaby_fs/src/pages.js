import About from './components/pages/about/about';
import ProductsCategoryModel from './components/pages/products-category-model/products-category-model' 
import ProductsCategory from './components/pages/products-category/products-category';
import Products from './components/pages/products/products';
import Prices from './components/pages/prices/prices';
import Catalogs from './components/pages/catalogs/catalogs';
import Certificates from './components/pages/certificates/certificates';
import Contacts from './components/pages/contacts/contacts';
import Basket from './components/pages/basket/basket';
import Sitemap from './components/pages/sitemap/sitemap'

const pages = [
    {
        href: '/about',
        caption: 'О нас',
        component: About,
        onMenu: true,
    },
    {
        href: '/products/:category/:model',
        caption: 'Продукты',
        component: ProductsCategoryModel,
        onMenu: false,
    },
    {
        href: '/products/:category',
        caption: 'Продукты',
        component: ProductsCategory,
        onMenu: false,
    },
    {
        href: '/products',
        caption: 'Продукты',
        component: Products,
        onMenu: true,
    },
    {
        href: '/prices',
        caption: 'Прайсы',
        component: Prices,
        onMenu: true,
    },
    {
        href: '/catalogs',
        caption: 'Каталоги',
        component: Catalogs,
        onMenu: true,
    },
    {
        href: '/certificates',
        caption: 'Сертификаты',
        component: Certificates,
        onMenu: true,
    },
    {
        href: '/contacts',
        caption: 'Контакты',
        component: Contacts,
        onMenu: true,
    },
    {
        href: '/basket',
        caption: 'Заявка на поставку',
        component: Basket,
        onMenu: true,
    },
    {
        href: '/sitemap',
        component: Sitemap,
        onMenu: false,
    },
];

export default pages;
