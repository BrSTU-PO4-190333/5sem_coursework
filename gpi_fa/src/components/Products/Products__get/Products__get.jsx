import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPen,
} from '@fortawesome/free-solid-svg-icons';

import DeleteButton from './DeleteButton';
import styles from "./Products__get.module.css";
import Product from "../../../scripts/Product";

export default function Products__get() {
    const [products, setProducts] = useState([]);

    useEffect(() => { // Constructor
        setProductsArray()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function setProductsArray() {
        const GPI_PRD = new Product();
        const GPI_ARR = await GPI_PRD.get();
        console.log(GPI_ARR);
        setProducts(GPI_ARR);

        if (GPI_ARR.length === 0)
        {
            alert("Нет товаров в таблице!");
        }
    }

    return (
        <div className={`${styles.Products__get} container`}>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Img</th>
                        <th>Img src</th>
                        <th>Model</th>
                        <th>Name</th>
                        <th>OnBox</th>
                        <th>KG</th>
                        <th>M3</th>
                        <th>CostBYN</th>
                        <th>Company</th>
                        <th>Category</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((value, index) => (
                        <tr key={index}>
                            <th>{value.ID}</th>
                            <td>
                                <img src={value.Img} alt="" width="64" />
                            </td>
                            <td>{value.Img}</td>
                            <td>{value.Model}</td>
                            <td>{value.Name}</td>
                            <td>{value.OnBox}</td>
                            <td>{value.KG}</td>
                            <td>{value.M3}</td>
                            <td>{value.CostBYN}</td>
                            <td>{value.Company}</td>
                            <td>{value.Category}</td>
                            <td>
                                <Link
                                    to={`/products/edit/${value.ID}`}
                                    className="btn btn-outline-success"
                                >
                                    <FontAwesomeIcon icon={faPen} />
                                </Link>
                            </td>
                            <td>
                                <DeleteButton id={value["ID"]} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
