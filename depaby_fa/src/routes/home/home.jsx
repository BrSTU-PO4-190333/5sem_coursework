import { Link } from 'react-router-dom';

import styles from './home.module.css';

const arrayPages = [
    {
        caption: "ПРОДУКТЫ",
        href: "/products",
    },
    {
        caption: "ДОКУМЕНТЫ",
        href: "/documents",
    },
    {
        caption: "КОНТАКТЫ",
        href: "/contacts",
    },
];

function Home() {
    return (
        <nav className={styles.menu}>
            <ul>
                {
                    arrayPages.map(function (value, index) {
                        return (
                            <li key={index}>
                                <Link to={value.href}>{value.caption}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
}

export default Home;
