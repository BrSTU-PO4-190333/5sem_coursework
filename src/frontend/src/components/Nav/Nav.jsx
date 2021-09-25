import {Link} from 'react-router-dom';
import styles from "./Nav.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Nav(props)
{
    return (
        <nav className={styles.Nav}>
            <ul>
                {
                    props.list.map(
                        (value, index) => (
                            <li key={index}>
                                <Link to={value["Href"]}>
                                    <div className={styles.Nav__link_icon}>
                                        <FontAwesomeIcon icon={value["Icon"]} />
                                    </div>
                                    <div className={styles.Nav__link_title}>
                                        {value["Name"]}
                                    </div>
                                </Link>
                            </li>
                        )
                    )
                }
            </ul>
        </nav>
    );
}

export default Nav;
