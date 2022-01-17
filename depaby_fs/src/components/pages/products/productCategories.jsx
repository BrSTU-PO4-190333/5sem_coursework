import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FetchReadProductCategories from "./../../../scripts/AbstractFetchRead/FetchReadProductCategories";
import styles from "./productCategories.module.css";

function ProductCategories() {
    const [array, setArray] = useState([]);

    useEffect(function () {
        read();
    }, []);

    async function read() {
        const class_istance = new FetchReadProductCategories();
        const response = await class_istance.read();

        if (response.length === 0) {
            alert("Нет категорий в таблице категорий");
        }

        setArray(response);
    }

    return (
        <div className="container">
            <h1>Категории продуктов</h1>
            <div className={styles.cards}>
                {
                    array.map(function (value, index) {
                        return (
                            <Link
                                className={styles.card}
                                key={index}
                                to={`/products/${value.depaby_product_category}`}
                            >
                                <div className={styles.card__image}>
                                    <img src={value.depaby_img_href} alt="" />
                                </div>
                                <div className={styles.card__caption}>
                                    {value.depaby_caption}
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ProductCategories;
