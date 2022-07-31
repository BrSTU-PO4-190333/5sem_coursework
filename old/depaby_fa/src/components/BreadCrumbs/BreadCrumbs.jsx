import React from "react";
import { withRouter } from "react-router-dom";

import styles from "./BreadCrumbs.module.css"

const Breadcrumbs = props => {
    const {
        history,
        location: { pathname }
    } = props;
    const pathnames = pathname.split("/").filter(x => x);
    return (
        <div className={styles.Breadcrumbs}>
            <div>
                {
                    pathnames.length > 0 ? (
                        <span onClick={() => history.push("/")}>home</span>
                    ) : (
                        <span>home</span>
                    )
                }
                {
                    pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;
                        return isLast ? (
                            <span key={name}>{name}</span>
                        ) : (
                            <span key={name} onClick={() => history.push(routeTo)}>
                                {name}
                            </span>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default withRouter(Breadcrumbs);
