import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import FetchAuth from "../../scripts/FetchAuth";
import styles from "./login.module.css";

function LogIn() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [HtmlRedirect, setHtmlRedirect] = useState(<></>);

    useEffect(function () {
        async function constructor() {
            let _login = localStorage.getItem("login");
            let _password = localStorage.getItem("password");

            const class_instance = new FetchAuth(_login, _password);
            const response = await class_instance.auth();

            if (response === true) {
                setHtmlRedirect(<Redirect to="/menu" />)
                return;
            }

            if (response === false) {
                localStorage.removeItem("login");
                localStorage.removeItem("password");
                return;
            }
        }
        constructor();
    }, []);

    async function auth() {
        const class_instance = new FetchAuth(login, password);
        const response = await class_instance.auth();

        if (response === true) {
            localStorage.setItem("login", login);
            localStorage.setItem("password", password);

            setHtmlRedirect(<Redirect to="/menu" />)

            return;
        }

        if (response === false) {
            localStorage.removeItem("login");
            localStorage.removeItem("password");
            return;
        }
    }

    return (
        <div className={styles.wrapper}>
            {HtmlRedirect}
            <div className={styles.login}>
                <input
                    type="text"
                    placeholder="Логин"
                    value={login}
                    onChange={event => setLogin(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <button onClick={auth}>Войти</button>
            </div>
        </div>
    );
}

export default LogIn;
