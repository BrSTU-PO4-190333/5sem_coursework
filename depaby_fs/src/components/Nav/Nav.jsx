import { useState } from 'react';
import React from "react";
import { Link } from 'react-router-dom';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "./logo.png";
import styles from "./Nav.module.css";

function Nav(props) {
    const [navIsOpen, setNavIsOpen] = useState(false);
    return (
        <header className={styles.menu}>
            <div className={styles.menu__wrapper}>
                <div className={styles.menu__empty_block}>
                    {/* <FontAwesomeIcon icon={faBars} /> */}
                </div>
                <Link
                    className={styles.menu__link_logo}
                    to="/"
                    onClick={event => setNavIsOpen(!navIsOpen)}
                >
                    <img src={logo} alt="" />
                </Link>
                <div
                    className={styles.menu__bar_block}
                    onClick={event => setNavIsOpen(!navIsOpen)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <nav
                    className={styles.menu__ul_block}
                    style={{
                        display: navIsOpen ? "block" : "none",
                    }}
                >
                    <ul>
                        {
                            props.pages.map(function (value, index) {
                                return value.onMenu ? (
                                    <li key={index}>
                                        <Link
                                            onClick={event => setNavIsOpen(!navIsOpen)}
                                            to={value.href}
                                        >
                                            {value.caption}
                                        </Link>
                                    </li>
                                ) : (
                                    <React.Fragment key={index}></React.Fragment>
                                );
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Nav;
