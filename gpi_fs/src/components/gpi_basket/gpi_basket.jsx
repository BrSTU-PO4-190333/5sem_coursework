import { useEffect, useState } from "react";
import gpi_class_download_file from "./../../scripts/gpi_class_download_file";

function GpiBasket() {
    const [gpi_Basket, gpi_setBasket] = useState({});

    // Конструктор
    useEffect(() => {
        gpi_reload_basket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function gpi_reload_basket() {
        gpi_setBasket(gpi_get_basket());
    }

    function gpi_get_basket() {
        let gpi_str_basket;                     // Объект в строке
        let gpi_basket;                         // Объект ключ - модель, значение - количество
        // = = = = = = = = = = = = = = = =

        gpi_str_basket = localStorage.getItem("gpi_basket");// Получаем объект в строке из БД

        if (gpi_str_basket == null) {           // Если в БД нет
            return {};                          // Возвращаем пустой объект
        }

        gpi_basket = JSON.parse(gpi_str_basket);// Преобразуем объект в строке в объект

        // Если это не объект
        if (Object.prototype.toString.call(gpi_basket) !== "[object Object]") {
            return {};                          // Возвращаем пустой объект
        }

        return gpi_basket;                      // Возвращаем объект
    }

    function gpi_download_csv_basket() {
        // gpi_ Текст файла
        let gpi_file_content = "";
        // gpi_ Добавляем CSV заголовок
        gpi_file_content += `"", "Товар", "Количество"\n`;
        // gpi_ Добавляю CSV элементы
        Object.keys(gpi_Basket).forEach(function (key, index) {
            gpi_file_content += `"${index + 1}", "${key}", "${gpi_Basket[key]}"\n`; // Добавили CSV тело
        })
        // gpi_ Скачиваю файл
        const gpi_obj = new gpi_class_download_file();
        gpi_obj.gpi_download_file(gpi_file_content, 'basket.csv');
    }

    function gpi_delete_basket(model) {
        let gpi_str_basket;                         // Объект в строке
        let gpi_basket;                             // Объект ключ - модель, значение - количество
        // = = = = = = = = = = = = = = = =

        gpi_basket = gpi_Basket;                    // Записываем объект
        delete gpi_basket[model];                   // Удаляем из корзины модель
        gpi_str_basket = JSON.stringify(gpi_basket);// Преобразуем объект в строку
        localStorage.setItem("gpi_basket", gpi_str_basket); // Записываем в БД строку

        gpi_reload_basket();                        // Обновляем компонент
    }

    return (
        <div className="container">
            <div className="mb-3 mt-3">
                <button
                    className="btn btn-success"
                    onClick={gpi_download_csv_basket}
                >Печать</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Модель</th>
                        <th>Количество</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(gpi_Basket).map(
                            (model, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{model}</td>
                                    <td>{gpi_Basket[model]}</td>
                                    <td>
                                        <button
                                            className="btn btn-outline-danger"
                                            onClick={event => gpi_delete_basket(model)}
                                        >
                                            Убрать с корзины
                                        </button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default GpiBasket;
