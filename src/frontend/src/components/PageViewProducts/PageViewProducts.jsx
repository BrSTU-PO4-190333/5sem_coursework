import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileDownload,
    faEdit,
    faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import DownloadFile from "./DownloadFile.js";

function PageViewProducts() {
    const [ProductsArray, SetProductsArray] = useState([]);
    const [constructorHasRun, setConstructorHasRun] = useState(false);
    const [HTMLredirect, SetHTMLredirect] = useState(<div></div>);

    // = = = = = constructor
    const constructor = () => {
        if (constructorHasRun) return;
        setConstructorHasRun(true);

        let url = `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}`;
        url += `/get-products`;
        url += `/`;
        url += `login=${localStorage.getItem("login")}`;
        url += `&`;
        url += `password=${localStorage.getItem("password")}`;

        axios.get(url)
            .then(data => data['data'])
            .then(result => {
                if (result === "errLogin" || result === "errPassword") {
                    SetHTMLredirect(<Redirect to="/logout" />);
                }
                else {
                    result.sort(function (a, b) {
                        if (a["ID"] < b["ID"]) return 1;
                        else if (a["ID"] > b["ID"]) return -1;
                        else return 0;
                    });
                    SetProductsArray(result);
                }
            });
    };
    constructor();
    // = = = = = end constructor

    function DeleteProduct(id) {
        let url = `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}`;
        url += `/delete-product`;
        url += `/`;
        url += `id=${id}`;
        url += `&`;
        url += `login=${localStorage.getItem("login")}`;
        url += `&`;
        url += `password=${localStorage.getItem("password")}`;

        axios.get(url);
        setConstructorHasRun(false);
        constructor();
        alert(`Deleted product by id=${id}`);
    }

    function DownloadJSONfile() {
        axios.get(`${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/get-products`)
            .then(data => {
                let arr = data["data"];
                let string = JSON.stringify(arr);
                DownloadFile(string, 'products.json');
            });
    }

    function DownloadCSVfile() {
        axios.get(`${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/get-products`)
            .then(data => {
                let arr = data["data"];
                let str = '"ID", "Model", "Name", "NameRU", "OnBox", "KG", "M3"\n';
                arr.forEach((value) => {
                    str += `${value["ID"]}`;
                    str += `,`;
                    str += `${value["Model"]}`;
                    str += `,`;
                    str += `${value["Name"]}`;
                    str += `,`;
                    str += `${value["NameRU"]}`;
                    str += `,`;
                    str += `${value["OnBox"]}`;
                    str += `,`;
                    str += `${value["KG"]}`;
                    str += `,`;
                    str += `${value["M3"]}`;
                    str += `\n`;
                });
                DownloadFile(str, 'products.csv');
            });
    }

    return (
        <div>
            {HTMLredirect}
            <button
                className="btn btn-success"
                onClick={event => DownloadJSONfile()}
            >
                <FontAwesomeIcon icon={faFileDownload} /> Download JSON file
            </button> <button
                className="btn btn-success"
                onClick={event => DownloadCSVfile()}
            >
                <FontAwesomeIcon icon={faFileDownload} /> Download CSV file
            </button>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Model</th>
                        <th scope="col">Name</th>
                        <th scope="col">NameRU</th>
                        <th scope="col">OnBox</th>
                        <th scope="col">KG</th>
                        <th scope="col">M3</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ProductsArray.map(
                            (value, index) => (
                                <tr key={index}>
                                    <th scope="row">{value["ID"]}</th>
                                    <td>{value["Model"]}</td>
                                    <td>{value["Name"]}</td>
                                    <td>{value["NameRU"]}</td>
                                    <td>{value["OnBox"]}</td>
                                    <td>{value["KG"]}</td>
                                    <td>{value["M3"]}</td>
                                    <td>
                                        <Link
                                            className="btn btn-outline-success"
                                            to={`/update-product/${value["ID"]}`}
                                        >
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-outline-danger"
                                            onClick={event => DeleteProduct(value["ID"])}
                                        >
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default PageViewProducts;
