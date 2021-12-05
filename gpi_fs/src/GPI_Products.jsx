import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from "./GPI_Products.module.css";

export default function Product() {
    const [gpi_productArray, gpi_setProductArray] = useState([
        {
            Model: "Модель",
            Img: "",
            Name: "Наименование",
            OnBox: 0,
            CostBYN: 0,
            KG: 0,
            M3: 0,
        }
    ]);
    const [gpi_productData, gpi_setProductData] = useState({});
    const [gpi_isOpenInfoWin, gpi_set_isOpenInfoWin] = useState(false);

    useEffect(() => {
        gpi_get_products();
    }, []);

    async function gpi_get_products() {
        try {
            const GPI_URL = `${process.env.REACT_APP_GPI__API_URL}:${process.env.REACT_APP_GPI__API_PORT}/products/get`;
            const GPI_RESPONSE = await axios.get(GPI_URL);
            console.log(GPI_RESPONSE);
            gpi_setProductArray(GPI_RESPONSE.data);
            console.log("qq")
        }
        catch(err) {
            console.error(err);
            alert("Error connect with API");
        }
    }

    function gpi_open_window_about_products(index) {
        gpi_setProductData(gpi_productArray[index]);
        gpi_set_isOpenInfoWin(true)
    }

    function gpi_close_window_about_products() {
        gpi_set_isOpenInfoWin(false)
    }

    function ProductInfo() {
        return (
            <div className={styles.product_info}>
                <div>
                    <button
                        onClick={gpi_close_window_about_products}
                        className={styles.product_info__close_button}
                    >x</button>
                </div>
                <div>
                    <div className="container">
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <td>Модель</td>
                                    <td>{gpi_productData.Model}</td>
                                </tr>
                                <tr>
                                    <td>Картинка</td>
                                    <td><img src={gpi_productData.Img} alt="" /></td>
                                </tr>
                                <tr>
                                    <td>Наименование</td>
                                    <td>{gpi_productData.Name}</td>
                                </tr>
                                <tr>
                                    <td>В коробке</td>
                                    <td>{gpi_productData.OnBox == 0? "не указано" : gpi_productData.OnBox}</td>
                                </tr>
                                <tr>
                                    <td>Цена за одну штуку (BYN)</td>
                                    <td>{gpi_productData.CostBYN == 0? "не указано" : gpi_productData.CostBYN}</td>
                                </tr>
                                <tr>
                                    <td>Вес (кг)</td>
                                    <td>{gpi_productData.KG == 0? "не указано" : gpi_productData.KG}</td>
                                </tr>
                                <tr>
                                    <td>Размер коробки (м3)</td>
                                    <td>{gpi_productData.M3 == 0? "не указано" : gpi_productData.M3}</td>
                                </tr>
                                <tr>
                                    <td>Компания</td>
                                    <td>{gpi_productData.Company}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`${styles.b_products} container`}>

            <div style={{
                display: gpi_isOpenInfoWin ? "block" : "none",
            }}>
                <ProductInfo />
            </div>

            {
                gpi_productArray.map(function (value, index) {
                    return (
                        <div
                            key={index}
                            className={`${styles.products__product} gpi_wrapper`}
                        >
                            <div className="gpi_content">
                                <div className={styles.products_img}>
                                    <img src={value.Img} alt={`no img ${value.Img}`} />
                                </div>
                                <div className={styles.products__model}>
                                    {value.Model}
                                </div>
                                <div>
                                    {value.Name}
                                </div>
                            </div>
                            <div className="gpi_footer">
                                <div className={styles.products__cost}>
                                    {value.CostBYN} BYN
                                </div>
                                <div className={styles.products__more_button}>
                                    <button onClick={() => gpi_open_window_about_products(index)}>
                                        Подробнее
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}
