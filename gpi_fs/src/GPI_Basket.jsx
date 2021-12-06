import { useEffect, useState } from "react";
import gpi_download_file from "./gpi_download_file";

export default function GPI_Basket() {
    const [gpi_Basket, gpi_setBasket] = useState({});

    // Конструктор
    useEffect(() => {
        gpi_reload_basket();
    }, []);

    function gpi_reload_basket() {
        gpi_setBasket(gpi_get_basket());
    }

    function gpi_get_basket() {
        let gpi_str_basket;                                     // Объект в строке
        let gpi_basket;                                         // Объект ключ - модель, значение - количество
        // = = = = = = = = = = = = = = = =

        gpi_str_basket = localStorage.getItem("gpi_basket");  // Получаем объект в строке из БД

        if (gpi_str_basket == null) {                           // Если в БД нет
            return {};                                          // Возвращаем пустой объект
        }

        gpi_basket = JSON.parse(gpi_str_basket);                // Преобразуем объект в строке в объект

        // Если это не объект
        if (Object.prototype.toString.call(gpi_basket) !== "[object Object]") {
            return {};                                          // Возвращаем пустой объект
        }

        return gpi_basket;                                      // Возвращаем объект
    }

    function gpi_print() {
        gpi_download_csv();
    }

    function gpi_download_csv() {
        let gpi_str = "";                                       // Текст файла
    
        gpi_str += `"", "Товар", "Количество"\n`;               // Добавили CSV заголовок

        Object.keys(gpi_Basket).forEach(function (key, index) {
            gpi_str += `"${index + 1}", "${key}", "${gpi_Basket[key]}"\n`; // Добавили CSV тело
        })
      
        const D = new Date();                                   // Получаем сегодняшнюю дату
        const FILE_NAME = `${D.getFullYear()}-${D.getMonth()}-${D.getDate()}_${D.getHours()}-${D.getMinutes()}_basket.csv`;
    
        gpi_download_file(gpi_str, FILE_NAME);                  // Вызываем функцию скачивания файла
    }

    function gpi_delete_basket(model) {
        let gpi_str_basket;                                     // Объект в строке
        let gpi_basket;                                         // Объект ключ - модель, значение - количество
        // = = = = = = = = = = = = = = = =

        gpi_basket = gpi_Basket;                                // Записываем объект
        delete gpi_basket[model];                               // Удаляем из корзины модель
        gpi_str_basket = JSON.stringify(gpi_basket);            // Преобразуем объект в строку
        localStorage.setItem("gpi_basket", gpi_str_basket);   // Записываем в БД строку

        gpi_reload_basket();                                    // Обновляем компонент
    }

    return (
        <div className="container">
            <div className="mb-3 mt-3">
                <button
                    className="btn btn-success"
                    onClick={gpi_print}
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
