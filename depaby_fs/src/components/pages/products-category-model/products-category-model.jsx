import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import FetchReadProducts from "../../../scripts/AbstractFetchRead/FetchReadProducts";
import styles from "./products-category-model.module.css";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";
import ProductBacket from "../../../scripts/ProductBasket"

function ProductsCategoriesModel() {
    const { category, model } = useParams();
    const [data, setData] = useState({});

    useEffect(function () {
        async function get() {
            const class_instance = new FetchReadProducts();
            const response = await class_instance.read({
                category: category,
                model: model
            });
            if (response.length === 0) {
                alert("Продукт не найден");
                setData({});
            }

            if (response.length >= 1) {
                setData(response[0]);
            }
        }
        get();
    }, [category, model]);

    return (
        <>
            <BreadCrumbs />
            <div className="container">
                <h1>{data.depaby_name}</h1>
                <ProductImg data={data} />
                <ProductBasket data={data} />
                <div className={styles.product_data}>
                    <table>
                        <tbody>
                            <ProductModel data={data} />
                            <ProductName data={data} />
                            <ProductCategory data={data} />
                            <ProductCompany data={data} />
                            <ProductOnBox data={data} />
                            <ProductCostByn data={data} />
                            <ProductOnKG data={data} />
                            <ProductOnM3 data={data} />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

function ProductImg(props) {
    return props.data.depaby_img_href && props.data.depaby_img_href !== '' ? (
        <div className={styles.product__img_wrapper}>
            <div className={styles.product__img}>
                <img src={props.data.depaby_img_href} alt="" />
            </div>
        </div>
    ) : <></>;
}

function ProductBasket(props) {
    const [count, setCount] = useState(0);

    useEffect(function () {
        setCount(ProductBacket.getCount(props.data.depaby_model));
    }, [props]);

    function plus() {
        ProductBacket.plus(props.data.depaby_model);
        setCount(ProductBacket.getCount(props.data.depaby_model));
    }

    function minus() {
        ProductBacket.minus(props.data.depaby_model);
        setCount(ProductBacket.getCount(props.data.depaby_model));
    }

    return props.data.depaby_model && props.data.depaby_model !== '' ? (
        <div className={styles.product__basket}>
            <button className={styles.minus} onClick={minus}>-</button>
            В корзине {count} шт.
            <button className={styles.plus} onClick={plus}>+</button>
        </div>
    ) : <></>;
}

function ProductModel(props) {
    return props.data.depaby_model && props.data.depaby_model !== '' ? (
        <tr>
            <td>Модель</td>
            <td>{props.data.depaby_model}</td>
        </tr>
    ) : <></>;
}

function ProductName(props) {
    return props.data.depaby_name && props.data.depaby_name !== '' ? (
        <tr>
            <td>Наименование</td>
            <td>{props.data.depaby_name}</td>
        </tr>
    ) : <></>;
}

function ProductCategory(props) {
    return props.data.depaby_category && props.data.depaby_category !== '' ? (
        <tr>
            <td>Категория</td>
            <td>{props.data.depaby_category}</td>
        </tr>
    ) : <></>;
}

function ProductCompany(props) {
    return props.data.depaby_company && props.data.depaby_company !== '' ? (
        <tr>
            <td>Компания</td>
            <td>{props.data.depaby_company}</td>
        </tr>
    ) : <></>;
}

function ProductOnBox(props) {
    return props.data.depaby_on_box && props.data.depaby_on_box !== '0' ? (
        <tr>
            <td>В коробке</td>
            <td>{props.data.depaby_on_box} шт.</td>
        </tr>
    ) : <></>;
}

function ProductCostByn(props) {
    return props.data.depaby_cost_byn && props.data.depaby_cost_byn !== '0.00' ? (
        <tr>
            <td>Цена за одну штуку без НДС</td>
            <td>{props.data.depaby_cost_byn} BYN</td>
        </tr>
    ) : <></>;
}

function ProductOnKG(props) {
    return props.data.depaby_kg && props.data.depaby_kg !== '0.000' ? (
        <tr>
            <td>Вес</td>
            <td>{props.data.depaby_kg} кг</td>
        </tr>
    ) : <></>;
}

function ProductOnM3(props) {
    return props.data.depaby_m3 && props.data.depaby_m3 !== '0.0000' ? (
        <tr>
            <td>Размер</td>
            <td>{props.data.depaby_m3} m<sup>3</sup></td>
        </tr>
    ) : <></>;
}

export default ProductsCategoriesModel;
