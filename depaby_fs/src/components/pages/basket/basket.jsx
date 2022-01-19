import { useEffect, useState } from "react";

import ProductBasket from "../../../scripts/ProductBasket";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";

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
                <h1>Корзина продуктов</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Модель</th>
                            <th>Количество</th>
                            <th>Отнять</th>
                            <th>Добавить</th>
                            <th>Убрать</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(basket).map(
                                (model, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{model}</td>
                                        <td>{basket[model]}</td>
                                        <td><button onClick={event => basket_minus(model)}>-</button></td>
                                        <td><button onClick={event => basket_plus(model)}>+</button></td>
                                        <td><button onClick={event => basket_delete(model)}>delete</button></td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Basket;
