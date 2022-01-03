import { useEffect, useState } from 'react';
import gpi_class_FetchProducts from "./../../scripts/gpi_class_FetchProducts";
import styles from "./gpi_products.module.css";

function GpiProducts() {
  const [gpiProductsArray, setGpiProductsArray] = useState([]);
  const [gpiProductData, setGpiProductData] = useState({});
  const [gpi_isOpenInfoWin, gpi_set_isOpenInfoWin] = useState(false);

  useEffect(() => {
    gpi_get_products();
  }, []);

  async function gpi_get_products() {
    const gpi_obj = new gpi_class_FetchProducts();
    const gpi_res = await gpi_obj.gpi_get_products();
    if (typeof gpi_res === "undefined") {
      return;
    }

    setGpiProductsArray(gpi_res);

    if (gpi_res.length === 0) {
      alert("Таблица товаров пуста");
    }
  }

  function gpi_open_window_about_products(index) {
    setGpiProductData(gpiProductsArray[index]);
    gpi_set_isOpenInfoWin(true)
  }

  function gpi_close_window_about_products() {
    gpi_set_isOpenInfoWin(false)
  }

  function ProductInfo(props) {
    const [gpi_counter, gpi_setCounter] = useState(gpi_get_counter(props.gpi_model));

    function gpi_get_counter(gpi_model) {
      let gpi_str_arr;    // Ассоциативный массив в строке
      let gpi_arr;        // Ассоциативный массив
      // = = = = = = = = = = = = = = = =

      gpi_str_arr = localStorage.getItem("gpi_basket");     // Получаю объект в виде строки
      if (gpi_str_arr === null) {                             // Если функция вернула null, то
        localStorage.setItem("gpi_basket", "{}");  // Добавляю массив в БД
        gpi_str_arr = localStorage.getItem("gpi_basket"); // Получаю массив в виде строки
      }

      gpi_arr = JSON.parse(gpi_str_arr);                      // Строку в объект

      if (gpi_arr[gpi_model] === undefined) {                 // Если в БД нет такой модели, то
        return 0;
      }

      return gpi_arr[gpi_model];
    }

    function gpi_minus(gpi_model) {
      let gpi_str_arr;    // Ассоциативный массив в строке
      let gpi_arr;        // Ассоциативный массив
      let gpi_number;     // Количество товара
      // = = = = = = = = = = = = = = = =

      gpi_str_arr = localStorage.getItem("gpi_basket");     // Получаю объект в виде строки
      if (gpi_str_arr === null) {                             // Если функция вернула null, то
        localStorage.setItem("gpi_basket", "{}");         // Добавляю массив в БД
        gpi_str_arr = localStorage.getItem("gpi_basket"); // Получаю массив в виде строки
      }

      gpi_arr = JSON.parse(gpi_str_arr);                      // Строку в объект
      
      gpi_number = Number(gpi_arr[gpi_model]);                // Получаем число

      if (gpi_number == null) {
        gpi_number = 0;
      }

      if (isNaN(gpi_number)) {
        gpi_number = 0;
      }

      if (gpi_number > 0) {
        gpi_number -= 1;                                    // Отнимаю 1
        gpi_arr[gpi_model] = gpi_number;                    // Записываем в объект новое значение
      }
      
      if (gpi_number === 0) {
        delete gpi_arr[gpi_model];
      }
      
      gpi_str_arr = JSON.stringify(gpi_arr);                  // Превращаем объект в строку
      localStorage.setItem("gpi_basket", gpi_str_arr);      // Записываем строку в БД

      gpi_setCounter(gpi_number);
    }

    function gpi_plus(gpi_model) {
      let gpi_str_arr;    // Ассоциативный массив в строке
      let gpi_arr;        // Ассоциативный массив
      let gpi_number;     // Количество товара
      // = = = = = = = = = = = = = = = =

      gpi_str_arr = localStorage.getItem("gpi_basket");     // Получаю объект в виде строки
      if (gpi_str_arr === null) {                             // Если функция вернула null, то
        localStorage.setItem("gpi_basket", "{}");         // Добавляю массив в БД
        gpi_str_arr = localStorage.getItem("gpi_basket"); // Получаю массив в виде строки
      }

      gpi_arr = JSON.parse(gpi_str_arr);                      // Строку в объект

      gpi_number = Number(gpi_arr[gpi_model]);                // Получаем число

      if (gpi_number == null) {
        gpi_number = 0;
      }

      if (isNaN(gpi_number)) {
        gpi_number = 0;
      }

      if (gpi_number >= 0) {
        gpi_number += 1;                                        // Прибавляем 1
        gpi_arr[gpi_model] = gpi_number;                        // Записываем в объект новое значение
      }

      gpi_str_arr = JSON.stringify(gpi_arr);                  // Превращаем объект в строку
      localStorage.setItem("gpi_basket", gpi_str_arr);      // Записываем строку в БД

      gpi_setCounter(gpi_number);
    }

    function gpi_change_counter(num) {
      let gpi_str_arr;    // Ассоциативный массив в строке
      let gpi_arr;        // Ассоциативный массив
      let gpi_model;      // Модель товара
      let gpi_number;     // Количество товара
      // = = = = = = = = = = = = = = = =

      gpi_model = gpiProductData.Model;                      // Записываю модель
      
      gpi_str_arr = localStorage.getItem("gpi_basket");     // Получаю объект в виде строки
      if (gpi_str_arr === null) {                             // Если функция вернула null, то
        localStorage.setItem("gpi_basket", "{}");         // Добавляю массив в БД
        gpi_str_arr = localStorage.getItem("gpi_basket"); // Получаю массив в виде строки
      }

      gpi_arr = JSON.parse(gpi_str_arr);                      // Строку в объект
      
      gpi_number = Number(num);                               // Получаю число из строки

      if (gpi_number > 0) {
        gpi_arr[gpi_model] = gpi_number;                    // Записываем в объект новое значение
      }

      if (gpi_number === 0) {
        delete gpi_arr[gpi_model];
      }

      gpi_str_arr = JSON.stringify(gpi_arr);                  // Превращаем объект в строку
      localStorage.setItem("gpi_basket", gpi_str_arr);      // Записываем строку в БД

      gpi_setCounter(gpi_number);
    }

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
                  <td>В корзине</td>
                  <td>
                    <div className={styles.gpi_products_info__b_counter}>
                      <input
                        type="number" min="0"
                        value={gpi_counter}
                        onChange={event => gpi_change_counter(event.target.value)}
                      />
                      <button
                        className="btn btn-danger"
                        onClick={event => gpi_minus(gpiProductData.gpi_model)}
                      >-</button>
                      <button
                        className="btn btn-success"
                        onClick={event => gpi_plus(gpiProductData.gpi_model)}
                      >+</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Модель</td>
                  <td>{gpiProductData.gpi_model}</td>
                </tr>
                <tr>
                  <td>Картинка</td>
                  <td><img src={gpiProductData.gpi_img_path} alt="" /></td>
                </tr>
                <tr>
                  <td>Наименование</td>
                  <td>{gpiProductData.gpi_name}</td>
                </tr>
                <tr>
                  <td>В коробке</td>
                  <td>{gpiProductData.gpi_on_box}</td>
                </tr>
                <tr>
                  <td>Цена за одну штуку (BYN)</td>
                  <td>{gpiProductData.gpi_cost_byn}</td>
                </tr>
                <tr>
                  <td>Вес (кг)</td>
                  <td>{gpiProductData.gpi_kg}</td>
                </tr>
                <tr>
                  <td>Размер коробки (м3)</td>
                  <td>{gpiProductData.gpi_m3}</td>
                </tr>
                <tr>
                  <td>Компания</td>
                  <td>{gpiProductData.gpi_company}</td>
                </tr>
                <tr>
                  <td>Категория</td>
                  <td>{gpiProductData.gpi_category}</td>
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
        <ProductInfo gpi_model={gpiProductData.gpi_model} />
      </div>

      {
        gpiProductsArray.map(function (gpi_value, gpi_index) {
          return (
            <div
              key={gpi_index}
              className={`${styles.products__product} gpi_wrapper`}
            >
              <div className="gpi_content">
                <div className={styles.products_img}>
                  <img
                    src={gpi_value.gpi_img_path}
                    alt={`no img '${gpi_value.gpi_img_path}'`}
                  />
                </div>
                <div className={styles.products__model}>
                  {gpi_value.gpi_model}
                </div>
                <div>
                  {gpi_value.gpi_name}
                </div>
              </div>
              <div className="gpi_footer">
                <div className={styles.products__cost}>
                  {gpi_value.gpi_cost_byn} BYN
                </div>
                <div className={styles.products__more_button}>
                  <button onClick={() => gpi_open_window_about_products(gpi_index)}>
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

export default GpiProducts;
