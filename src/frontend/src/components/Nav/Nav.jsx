import { Link } from 'react-router-dom';

import styles from "./Nav.module.css";

export default function Nav(props) {
    return (
        <nav className={styles.Nav}>
            <div className="container">
                <ul >
                    <li>
                        <Link to="/products">Products</Link>
                        <ul>
                            <li>
                                <Link to="/products/open">Open</Link>
                            </li>
                            <li>
                                <Link to="/products/add">Add</Link>
                            </li>
                            <li>
                                <Link to="/products/get">Get</Link>
                            </li>
                            <li>
                                <Link to="/products/download-csv">Download CSV</Link>
                            </li>
                            <li>
                                <Link to="/products/download-json">Download JSON</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
