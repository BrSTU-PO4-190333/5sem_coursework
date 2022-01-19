import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import FetchReadProducts from "./../../../scripts/AbstractFetchRead/FetchReadProducts";
import FetchReadProductCategories from "../../../scripts/AbstractFetchRead/FetchReadProductCategories";
import styles from "./products.module.css";
import ProductBasket from '../../../scripts/ProductBasket';
import BreadCrumbs from '../../BreadCrumbs/BreadCrumbs';

function Products() {
    const { productCategory } = useParams();
    const [categoryObject, setCategoryObject] = useState({});
    const [productsArray, setProductsArray] = useState([]);
    const [isOpenProductDataWindow, setIsOpenProductDataWindow] = useState(false);
    const [currentProductIndex, setCurrentProductIndex] = useState(0);

    useEffect(() => {
        readCategory();
        readProducts();
    }, [productCategory]);

    async function readCategory() {
        const class_istance = new FetchReadProductCategories();
        const response = await class_istance.read({
            category: productCategory,
        });

        if (response.length === 0) {
            setCategoryObject({});
            return;
        }

        if (response[0]) {
            setCategoryObject(response[0]);
            return;
        }
    }

    async function readProducts() {
        const class_istance = new FetchReadProducts();
        const response = await class_istance.read({
            category: productCategory,
        });

        setProductsArray(response);
    }

    function openWindow(id = '') {
        setIsOpenProductDataWindow(!isOpenProductDataWindow);

        if (id === '') {
            return;
        }

        setCurrentProductIndex(id);
    }

    return (
        <>
            <BreadCrumbs />
            <div className='container'>
                <ProductInfo
                    isOpenProductDataWindow={isOpenProductDataWindow}
                    openWindow={openWindow}
                    data={productsArray[currentProductIndex]}
                />
                <h1>{categoryObject.depaby_caption}</h1>
                <div className={styles.products__block}>
                    {
                        productsArray.map(function (value, index) {
                            return (
                                <div key={index} className={`${styles.ProductCard} ${styles.wrapper}`}>
                                    <div className={styles.content}>
                                        <ProductCardImg data={value} />
                                        <ProductCardModel data={value} />
                                        <ProductCardName data={value} />
                                    </div>
                                    <div className={styles.footer}>
                                        <ProductCardCostByn data={value} />
                                        <ProductCardInfoButton openWindow={event => openWindow(index)} />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

function ProductCardImg(props) {
    return (
        <div className={styles.ProductCardImg}>
            <img src={props.data.depaby_img_href} alt='no img' />
        </div>
    );
}

function ProductCardModel(props) {
    return (
        <div className={styles.ProductCardModel}>
            {props.data.depaby_model}
        </div>
    );
}

function ProductCardName(props) {
    return (
        <>
            {props.data.depaby_name}
        </>
    );
}

function ProductCardCostByn(props) {
    return (
        <div className={styles.ProductCardCostByn}>
            {props.data.depaby_cost_byn} BYN
        </div>
    );
}

function ProductCardInfoButton(props) {
    return (
        <div className={styles.ProductCardInfoButton}>
            <button onClick={props.openWindow}>
                Подробнее
            </button>
        </div>
    );
}

function ProductInfo(props) {
    const [count, setCount] = useState(get());

    useEffect(function () {
        setCount(ProductBasket.getCount(props.data?.depaby_model));
    }, [props]);

    function get() {
        return ProductBasket.getCount(props.data?.depaby_model);
    }

    function plus() {
        ProductBasket.plus(props.data.depaby_model);
        setCount(get());
    }

    function minus() {
        ProductBasket.minus(props.data.depaby_model);
        setCount(get());
    }

    return (
        <div style={{ display: props.isOpenProductDataWindow ? 'block' : 'none' }} className={styles.ProductInfo}>
            <div>
                <button onClick={event => props.openWindow()}>x</button>
            </div>
            <hr />
            <table>
                <thead>
                    <tr>
                        <td>В корзине</td>
                        <td>Прибавить</td>
                        <td>Отнять</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{count}</td>
                        <td><button onClick={plus}>+</button></td>
                        <td><button onClick={minus}>-</button></td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td>Модель</td>
                        <td>{props.data?.depaby_model}</td>
                    </tr>
                    <tr>
                        <td>Наименование</td>
                        <td>{props.data?.depaby_name}</td>
                    </tr>
                    <tr>
                        <td>Стоимость</td>
                        <td>{props.data?.depaby_cost_byn}</td>
                    </tr>
                    <tr>
                        <td>В коробке</td>
                        <td>{props.data?.depaby_on_box}</td>
                    </tr>
                    <tr>
                        <td>Вес</td>
                        <td>{props.data?.depaby_kg}</td>
                    </tr>
                    <tr>
                        <td>Размер</td>
                        <td>{props.data?.depaby_m3}</td>
                    </tr>
                    <tr>
                        <td>Компания</td>
                        <td>{props.data?.depaby_company}</td>
                    </tr>
                    <tr>
                        <td>Категория</td>
                        <td>{props.data?.depaby_category}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Products;
