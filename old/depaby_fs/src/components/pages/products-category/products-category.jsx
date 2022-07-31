import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import FetchReadProducts from "../../../scripts/AbstractFetchRead/FetchReadProducts";
import styles from "./products-category.module.css";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";

function ProductsCategories() {
    const { category } = useParams();
    const [array, setArray] = useState([]);

    useEffect(function () {
        async function get() {
            const class_instance = new FetchReadProducts();
            const response = await class_instance.read({
                category: category,
            });
            setArray(response);
            console.log(response);
        }
        get();
    }, [category]);

    return (
        <>
            <BreadCrumbs />
            <div className="container">

                <div className={styles.cards}>
                    {
                        array.map(function (value, index) {
                            return (
                                <Link
                                    key={index}
                                    className={styles.card}
                                    to={`/products/${category}/${value.depaby_model}`}
                                >
                                    <div className={styles.card__img}>
                                        <img src={value.depaby_img_href} alt="no img" />
                                    </div>
                                    <div className={styles.card__model}>
                                        {value.depaby_model}
                                    </div>
                                    <div className={styles.card__name}>
                                        {value.depaby_name}
                                    </div>
                                    <div className={styles.card__cost}>
                                        {value.depaby_cost_byn === '0.00' ? '' : `${value.depaby_cost_byn} BYN`}
                                    </div>
                                    <button className={styles.card_button}>Подробнее</button>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProductsCategories;
