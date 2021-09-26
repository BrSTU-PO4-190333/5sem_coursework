import { useState } from 'react';
import axios from 'axios';
import { Redirect } from "react-router";

import styles from "./PageLogin.module.css";

function PageLogin() {
    const [Login, SetLogin] = useState(localStorage.getItem("login") ? localStorage.getItem("login") : "");
    const [Password, SetPassword] = useState(localStorage.getItem("password") ? localStorage.getItem("password") : "");
    const [HTMLredirect, SetHTMLredirect] = useState(<div></div>);

    function SingIn() {
        axios.post(
            `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/sing-in`,
            {
                login: Login,
                password: Password,
            }
        )
            .then((data) => {
                // console.log(data);
                if (data["data"] === "errLogin") {
                    alert("Login not found");
                    localStorage.removeItem("login");
                    localStorage.removeItem("password");
                }
                else if (data["data"] === "errPassword") {
                    alert("Error password");
                    localStorage.removeItem("login");
                    localStorage.removeItem("password");
                } 
                else {
                    alert("success");
                    localStorage.setItem("login", Login);
                    localStorage.setItem("password", Password);
                    SetHTMLredirect(<Redirect to="/view-products" />);
                }
            });
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
                        name="Login"
                        value={Login}
                        onInput={event => SetLogin(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="Password"
                        value={Password}
                        onInput={event => SetPassword(event.target.value)}
                    />
                </div>
                <button
                    className="btn btn-success"
                    onClick={event => SingIn()}
                >
                    Sing in
                </button>
            </div>
        </div>
    );
}

export default PageLogin;
