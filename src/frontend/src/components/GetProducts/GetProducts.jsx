import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileDownload,
    // faEdit,
    // faTrashAlt,
    faFileExcel,
} from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

import gpi_download_file from '../../scripts/gpi_download_file';

export default function GetProducts() {
    const [gpi_products, gpi_set_products] = useState([]);

    // Constructor
    useEffect(() => {
        gpi_set_products_arr()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function gpi_set_products_arr() {
        const res = await gpi_get_products();
        gpi_set_products(res);
        console.log(res);
    }

    async function gpi_get_products() {
        try {
            const GPI_URL = `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/gpi_get_products`;
            const res = await axios.get(GPI_URL);
            console.log(res);
            return res.data;
        }
        catch(err) {
            console.error(err);
            return [];
        }
    }

    async function gpi_download_json_file() {
        const res = await gpi_get_products();
        const gpi_str_arr = JSON.stringify(res);

        const d = new Date();
        const gpi_file_name = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}_${d.getHours()}-${d.getMinutes()}_products.json`;
        
        gpi_download_file(gpi_str_arr, gpi_file_name);
    }

    async function gpi_download_csv_file() {
        const res = await gpi_get_products();
        let gpi_str= "";
        
        if (res.length > 0) {
            const gpi_keys = Object.keys(res[0]);

            gpi_keys.forEach(function(val) {
                gpi_str += `"${val}", `;
            })
            gpi_str += "\n";

            res.forEach(function(obj) {
                gpi_keys.forEach(function(val) {
                    gpi_str += `"${obj[val]}", `;
                });
                gpi_str += "\n";
            })
        }

        const d = new Date();
        const gpi_file_name = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}_${d.getHours()}-${d.getMinutes()}_products.csv`;
        
        gpi_download_file(gpi_str, gpi_file_name);
    }

    return (
        <div>
            <button
                className="btn btn-success"
                onClick={event => gpi_download_json_file()}
            >
                <FontAwesomeIcon icon={faFileDownload} /> Download JSON file
            </button> <button
                className="btn btn-success"
                onClick={event => gpi_download_csv_file()}
            >
                <FontAwesomeIcon icon={faFileExcel} /> Download CSV file
            </button>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Img</th>
                        <th scope="col">Model</th>
                        <th scope="col">Name</th>
                        <th scope="col">OnBox</th>
                        <th scope="col">KG</th>
                        <th scope="col">M3</th>
                        {/* <th scope="col">Edit</th> */}
                        {/* <th scope="col">Delete</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        gpi_products.map(
                            (value, index) => (
                                <tr key={index}>
                                    <th scope="row">{value["ID"]}</th>
                                    <td>
                                        <img
                                            src={value["Img"]}
                                            alt={value["Img"]}
                                            width="64"
                                        />
                                    </td>
                                    <td>{value["Model"]}</td>
                                    <td>{value["Name"]}</td>
                                    <td>{value["OnBox"]}</td>
                                    <td>{value["KG"]}</td>
                                    <td>{value["M3"]}</td>
                                    {/* <td>
                                        <Link
                                            className="btn btn-outline-success"
                                            to={`/update-product/${value["ID"]}`}
                                        >
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Link>
                                    </td> */}
                                    {/* <td>
                                        <button
                                            className="btn btn-outline-danger"
                                            onClick={event => DeleteProduct(value["ID"])}
                                        >
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>
                                    </td> */}
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
