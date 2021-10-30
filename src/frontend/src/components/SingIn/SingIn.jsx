import { useState } from 'react';
import axios from 'axios';
import { Redirect } from "react-router";

import styles from "./SingIn.module.css";

export default function SingIn() {
    const [gpi_login, gpi_set_login] = useState(localStorage.getItem("login") ? localStorage.getItem("login") : "");
    const [gpi_password, gpi_set_password] = useState(localStorage.getItem("password") ? localStorage.getItem("password") : "");
    const [HTMLredirect, SetHTMLredirect] = useState(<div></div>);

    function gpi_genereate_url(gpi_site, gpi_DATA) {
        let gpi_url = gpi_site + "?";
        Object.keys(gpi_DATA).forEach(function(val) {
            gpi_url += `${val}=${gpi_DATA[val]}&`;
        })
        return gpi_url;
    }
    
    async function SingIn() {
        try {
            const GPI_URL = gpi_genereate_url(
                `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/gpi_singin`,
                {
                    login: gpi_login,
                    password: gpi_password,
                }
            );
            console.log(GPI_URL);
            const res = await axios.get(GPI_URL);
            switch(res.data) {
                case "errLogin":
                    alert("Login not found");
                    localStorage.removeItem("login");
                    localStorage.removeItem("password");
                    break;
                case "errPassword":
                    alert("Error password");
                    localStorage.removeItem("login");
                    localStorage.removeItem("password");
                    break;
                default:
                    alert("success");
                    localStorage.setItem("login", gpi_login);
                    localStorage.setItem("password", gpi_password);
                    SetHTMLredirect(<Redirect to="/view-products" />);
            }
        }
        catch(err) {
            console.error(err);
            alert("Error connect to API");
        }
        return;
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
                        name="Password"
                        value={gpi_password}
                        onInput={event => gpi_set_password(event.target.value)}
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
