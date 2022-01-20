import { useEffect, useState } from "react";

import ProductBasket from "../../../scripts/ProductBasket";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";
import styles from "./basket.module.css";
import FetchReadProducts from "../../../scripts/AbstractFetchRead/FetchReadProducts";

function Basket() {
    const [productArray, setProductArray] = useState([{}]);
    const [sum, setSum] = useState(0);

    // Получаем массив продуктов, которые есть в корзине
    useEffect(function () {
        async function read_products() {
            const class_instance = new FetchReadProducts();
            const array_models = ProductBasket.getModels();
            const response = await class_instance.read({
                array_models: array_models,
            });

            let arr = response;
            update_array(arr);
        }
        read_products();
    }, []);

    // Пересчитываем, из-за изменении пользователем числа
    function update_array(arr) {
        let total_sum = 0;
 
        let newArr = [];
        for (let i = 0; i < arr.length; ++i) {
            let value = arr[i];
            console.log(i)
            console.log(value);
            value.count = ProductBasket.getCount(value.depaby_model);
            if (value.count === 0) {
                delete arr[i];
                continue;
            }
            value.product_sum = value.count * value.depaby_cost_byn;
            value.product_sum = Math.floor(value.product_sum * 100) / 100;
            total_sum += value.product_sum;
            newArr.push(value);
        }

        setProductArray(newArr);
        total_sum = Math.floor(total_sum * 100) / 100;
        setSum(total_sum);
    }

    function basket_plus(model) {
        ProductBasket.plus(model);
        update_array(productArray);
    }

    function basket_minus(model) {
        ProductBasket.minus(model);
        update_array(productArray);
    }

    function basket_delete(model) {
        ProductBasket.delete(model);
        update_array(productArray);
    }

    return (
        <>
            <BreadCrumbs />
            <div className="container">
                <h1>Список желаемых товаров</h1>
                <div className={styles.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Картинка</th>
                                <th>Модель</th>
                                <th>Наименование</th>
                                <th>Цена за 1 шт. без НДС (BYN)</th>
                                <th>Количество (штуки)</th>
                                <th>Общая цена (BYN)</th>
                                <th>-</th>
                                <th>+</th>
                                <th>УДАЛИТЬ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productArray.map(function(value, index) {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td><img src={value.depaby_img_href} alt=""/></td>
                                            <td>{value.depaby_model}</td>
                                            <td>{value.depaby_name}</td>
                                            <td>{value.depaby_cost_byn}</td>
                                            <td>{value.count}</td>
                                            <td>{value.product_sum}</td>
                                            <td>
                                                <button
                                                    className={styles.minus}
                                                    onClick={event => basket_minus(value.depaby_model)}
                                                >-</button>
                                            </td>
                                            <td>
                                                <button
                                                    className={styles.plus}
                                                    onClick={event => basket_plus(value.depaby_model)}
                                                >+</button>
                                            </td>
                                            <td>
                                                <button
                                                    className={styles.delete}
                                                    onClick={event => basket_delete(value.depaby_model)}
                                                >УДАЛИТЬ</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <p>Итого: {sum} BYN</p>
                </div>
            </div>
        </>
    );
}

export default Basket;
