import { useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProductBasket from "../../../scripts/ProductBasket";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";
import styles from "./basket.module.css";
import FetchReadProducts from "../../../scripts/AbstractFetchRead/FetchReadProducts";
import FetchEmail from "../../../scripts/FetchEmail";
import get_form_data from "../../../scripts/get_form_data";

function Basket() {
    const [productArray, setProductArray] = useState([]);
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

        if (newArr.length === 0) {
            alert("Нет продуктов в корзине. Добавьте продуктов, чтобы оставить заявку.");
        }

        setProductArray(newArr);

        total_sum = Math.floor(total_sum * 100) / 100;
        setSum(total_sum);
    }

    // Удаляем элемент из списка
    function basket_delete(event, model) {
        event.preventDefault();
        ProductBasket.delete(model);
        update_array(productArray);
    }

    // Устанавливаем количество товара
    function basket_set(event, model) {
        let count = event.target.value;
        // Если пустая строка или отризательное, то записать 1
        // Если будет пустая строка, то удалится с корзины
        // Чтобы не удалилась с корзины ставим 1
        // Если хотим удалить, то есть кнопка удалить
        if (Number(count) <= 0) {
            count = 1;
        }
        ProductBasket.setCount(model, count);
        update_array(productArray);
    }

    // Функция, при отправке формы
    function form_send(event) {
        event.preventDefault();
        // Получаем данные с формы
        let params = get_form_data(event);
        // Добавляет свой параметр
        // params.models = ProductBasket.getBasket();
        params.array = productArray;
        params.sum = sum;

        if(productArray.length === 0) {
            alert("Заявка не отправлена, так как в корзине продуктов нет товаров.");
            return;
        }

        // Отправляем данные на сервер
        const class_instance = new FetchEmail();
        class_instance.send(params);
    }

    return (
        <>
            <BreadCrumbs />
            <div className="container">
                <h1>Заявка на поставку</h1>
                <form onSubmit={event => form_send(event)}>
                    <FormCompany />
                    <FormContact />
                    <FormEmail />
                    <FormPhone />
                    <FormAddress />
                    <div className={styles.table}>
                        <table>
                            <FormTableHeader />
                            <tbody>
                                {
                                    productArray.map(function (value, index) {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td><img src={value.depaby_img_href} alt="" /></td>
                                                <td>{value.depaby_model}</td>
                                                <td>{value.depaby_name}</td>
                                                <td>{value.depaby_cost_byn}</td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        value={value.count ? value.count : 1}
                                                        onChange={event => basket_set(event, value.depaby_model)}
                                                        min="1"
                                                    />
                                                </td>
                                                <td>{value.product_sum}</td>
                                                <td className={styles.delete}>
                                                    <button onClick={event => basket_delete(event, value.depaby_model)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                <FormTableFooter sum={sum} />
                            </tbody>
                        </table>
                    </div>
                    <FormCostSum sum={sum} />
                    <div className={styles.input_block}>
                        <input type="submit" value="Отправить заявку" />
                    </div>
                </form>
            </div>
        </>
    );
}

function FormCompany() {
    return (
        <div className={styles.input_block}>
            <label>Организация</label>
            <input
                type="text"
                placeholder="Организация"
                name="company"
                required
            />
        </div>
    );
}

function FormContact() {
    return (
        <div className={styles.input_block}>
            <label>Контактное лицо</label>
            <input
                type="text"
                placeholder="Контактное лицо"
                name="contact"
                required
            />
        </div>
    );
}

function FormEmail() {
    return (
        <div className={styles.input_block}>
            <label>E-mail</label>
            <input
                type="email"
                placeholder="E-mail"
                name="email"
                required
            />
        </div>
    );
}

function FormPhone() {
    return (
        <div className={styles.input_block}>
            <label>Телефон</label>
            <input
                type="text"
                placeholder="Телефон"
                name="phone"
                required
            />
        </div>
    );
}

function FormAddress() {
    return (
        <div className={styles.input_block}>
            <label htmlFor="">Адрес</label>
            <input
                type="text"
                placeholder="Адрес"
                name="address"
                required
            />
        </div>
    );
}

function FormTableHeader() {
    return (
        <thead>
            <tr>
                <th>№</th>
                <th>Картинка</th>
                <th>Модель</th>
                <th>Наименование</th>
                <th>Цена за 1 шт. без НДС (BYN)</th>
                <th>Количество (штуки)</th>
                <th>Общая цена (BYN)</th>
                <th>Удалить</th>
            </tr>
        </thead>
    );
}

function FormTableFooter(props) {
    return (
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><b>{props.sum} BYN</b></td>
            <td></td>
        </tr>
    );
}

function FormCostSum(props) {
    return (
        <div className={styles.input_block}>
            <label>Итого</label>
            <input type="text" value={`${props.sum} BYN`} readOnly />
        </div>
    );
}

export default Basket;
