import { useState } from 'react';
import axios from 'axios';
import { Redirect } from "react-router";

import styles from "./PageLogin.module.css";

function PageLogin() {
    const [Login, SetLogin] = useState(localStorage.getItem("login") ? localStorage.getItem("login") : "");
    const [Password, SetPassword] = useState(localStorage.getItem("password") ? localStorage.getItem("password") : "");

    const [RegLogin, SetRegLogin] = useState("");
    const [RegPassword, SetRegPassword] = useState("");

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

    function SingUp()
    {
        axios.post(
            `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/sing-up`,
            {
                login: RegLogin,
                password: RegPassword,
            }
        )
            .then((data) => {
                //console.log(data);
                switch(data["data"]) {
                    case "loginIsBusy":
                        alert("Login in busy");
                        break;
                    case "regiseredNow":
                        localStorage.setItem("login", RegLogin);
                        localStorage.setItem("password", RegPassword);

                        SetLogin(RegLogin);
                        SetPassword(RegPassword);

                        alert("Login registred now")
                        break;
                    default:
                        break;
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
            <div className={styles.PageLogin__form}>
                <div className="mb-3">
                    <label className="form-label">Login</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Login"
                        name="RegLogin"
                        value={RegLogin}
                        onInput={event => SetRegLogin(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="RegPassword"
                        value={RegPassword}
                        onInput={event => SetRegPassword(event.target.value)}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    onClick={event => SingUp()}
                >
                    Sing up
                </button>
            </div>
        </div>
    );
}

export default PageLogin;
