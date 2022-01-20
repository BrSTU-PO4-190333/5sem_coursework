import { useEffect, useState } from "react";

import ProductBasket from "../../../scripts/ProductBasket";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";
import styles from "./basket.module.css";

function Basket() {
    const [basket, setBasket] = useState({});

    useEffect(() => {
        basket_read();
    }, []);

    function basket_read() {
        setBasket(ProductBasket.read());
    }

    function basket_plus(model) {
        ProductBasket.plus(model);
        basket_read();
    }

    function basket_minus(model) {
        ProductBasket.minus(model);
        basket_read();
    }

    function basket_delete(model) {
        ProductBasket.delete(model);
        basket_read();
    }

    return (
        <>
            <BreadCrumbs />
            <div className="container">
                <h1>Список желаемых товаров</h1>
                <div className={styles.table}>
                    <table>
                        <tbody>
                            {
                                Object.keys(basket).map(
                                    (model, index) => (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{model}</td>
                                            <td>{basket[model]} шт.</td>
                                            <td>
                                                <button
                                                    onClick={event => basket_minus(model)}
                                                    className={styles.minus}
                                                >-</button>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={event => basket_plus(model)}
                                                    className={styles.plus}
                                                >+</button>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={event => basket_delete(model)}
                                                    className={styles.delete}
                                                >УДАЛИТЬ</button>
                                            </td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
}

export default Basket;
