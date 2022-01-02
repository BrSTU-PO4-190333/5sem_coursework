import { useState } from 'react';
import { Redirect } from "react-router";
import gpi_class_Fetch from "./../../scripts/gpi_class_Fetch";
import styles from "./gpi_sing_in.module.css";

function gpi_get_login() {
    if (localStorage.getItem("login")) {
        return localStorage.getItem("login");
    }
    return "";
}

function gpi_get_password() {
    if (localStorage.getItem("password")) {
        return localStorage.getItem("password");
    }
    return "";
}

function GpiSingIn() {
    const [gpi_login, gpi_set_login] = useState(gpi_get_login());
    const [gpi_password, gpi_set_password] = useState(gpi_get_password());
    const [HTMLredirect, SetHTMLredirect] = useState(<div></div>);

    // gpi_ Функция, которая проверяет логин и пароль
    // gpi_ В случае успеха происходит перенаправление
    async function gpi_sing_in() {
        // gpi_ Проверяем логин и пароль
        let gpi_obj = new gpi_class_Fetch(gpi_login, gpi_password);
        let gpi_auth_status = await gpi_obj.gpi_auth();

        // gpi_ Если авторизация прошла без успеха
        if (gpi_auth_status === false) {
            localStorage.removeItem("login");
            localStorage.removeItem("password");
            return;
        }

        // gpi_ Если авторизация прошла успешно
        localStorage.setItem("login", gpi_login);
        localStorage.setItem("password", gpi_password);
        SetHTMLredirect(<Redirect to="/products" />);
    }

    return (
        <div className={styles.PageLogin}>
            {HTMLredirect}
            <div className={styles.PageLogin__form}>
                <div className="mb-3">
                    <label className="form-label">Login</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Login"
                        value={gpi_login}
                        onInput={event => gpi_set_login(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        value={gpi_password}
                        onInput={event => gpi_set_password(event.target.value)}
                    />
                </div>
                <button
                    className="btn btn-success"
                    onClick={event => gpi_sing_in()}
                >
                    Sing in
                </button>
            </div>
        </div>
    );
}

export default GpiSingIn;
