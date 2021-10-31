import { Link } from 'react-router-dom';

import styles from "./Nav.module.css";
import Products__open_file from "../Products/Products__open_file";
import Products__download_json from "../Products/Products__download_json";
import Products__download_csv from "../Products/Products__download_csv";

function Nav(props) {
    return (
        <nav className={styles.Nav}>
            <div className="container">
                <ul >
                    <li>
                        <span>Products</span>
                        <ul>
                            <li>
                                <input
                                    style={{display: "none"}}
                                    type="file"
                                    id="gpi_products_open_file"
                                    onChange={event => Products__open_file(event)}
                                />
                                <label htmlFor="gpi_products_open_file">Open file</label>
                            </li>
                            <li>
                                <span
                                    onClick={event => Products__download_json()}
                                >Download JSON file</span>
                            </li>
                            <li>
                                <span
                                    onClick={event => Products__download_csv()}
                                >Download CSV file</span>
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

export default Nav;
