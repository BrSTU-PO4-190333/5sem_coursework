import { useEffect, useState } from 'react';
import FetchProducts from "./../../../scripts/FetchProducts";
import styles from "./products.module.css";

function Products() {
  const [productsArray, setProductsArray] = useState([]);
  const [productData, setProductData] = useState({});
  const [isOpenInfoWin, setIsOpenInfoWin] = useState(false);

  useEffect(() => {
    products_read();
  }, []);

  async function products_read() {
    const FetchProducts_object = new FetchProducts();
    const response = await FetchProducts_object.read();
    if (typeof response === "undefined") {
      return;
    }

    setProductsArray(response);

    if (response.length === 0) {
      alert("Таблица товаров пуста");
    }
  }

  function open_window_about_products(index) {
    setProductData(productsArray[index]);
    setIsOpenInfoWin(true)
  }

  function close_window_about_products() {
    setIsOpenInfoWin(false)
  }

  function ProductInfo(props) {
    const [gpi_counter, gpi_setCounter] = useState(gpi_get_counter(props.depaby_model));

    function gpi_get_counter(depaby_model) {
      let gpi_str_arr;    // Ассоциативный массив в строке
      let gpi_arr;        // Ассоциативный массив
      // = = = = = = = = = = = = = = = =

      gpi_str_arr = localStorage.getItem("gpi_basket");     // Получаю объект в виде строки
      if (gpi_str_arr === null) {                             // Если функция вернула null, то
        localStorage.setItem("gpi_basket", "{}");  // Добавляю массив в БД
        gpi_str_arr = localStorage.getItem("gpi_basket"); // Получаю массив в виде строки
      }

      gpi_arr = JSON.parse(gpi_str_arr);                      // Строку в объект

      if (gpi_arr[depaby_model] === undefined) {                 // Если в БД нет такой модели, то
        return 0;
      }

      return gpi_arr[depaby_model];
    }

    function gpi_minus(depaby_model) {
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
      
      gpi_number = Number(gpi_arr[depaby_model]);                // Получаем число

      if (gpi_number == null) {
        gpi_number = 0;
      }

      if (isNaN(gpi_number)) {
        gpi_number = 0;
      }

      if (gpi_number > 0) {
        gpi_number -= 1;                                    // Отнимаю 1
        gpi_arr[depaby_model] = gpi_number;                    // Записываем в объект новое значение
      }
      
      if (gpi_number === 0) {
        delete gpi_arr[depaby_model];
      }
      
      gpi_str_arr = JSON.stringify(gpi_arr);                  // Превращаем объект в строку
      localStorage.setItem("gpi_basket", gpi_str_arr);      // Записываем строку в БД

      gpi_setCounter(gpi_number);
    }

    function gpi_plus(depaby_model) {
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

      gpi_number = Number(gpi_arr[depaby_model]);                // Получаем число

      if (gpi_number == null) {
        gpi_number = 0;
      }

      if (isNaN(gpi_number)) {
        gpi_number = 0;
      }

      if (gpi_number >= 0) {
        gpi_number += 1;                                        // Прибавляем 1
        gpi_arr[depaby_model] = gpi_number;                        // Записываем в объект новое значение
      }

      gpi_str_arr = JSON.stringify(gpi_arr);                  // Превращаем объект в строку
      localStorage.setItem("gpi_basket", gpi_str_arr);      // Записываем строку в БД

      gpi_setCounter(gpi_number);
    }

    function gpi_change_counter(num) {
      let gpi_str_arr;    // Ассоциативный массив в строке
      let gpi_arr;        // Ассоциативный массив
      let depaby_model;      // Модель товара
      let gpi_number;     // Количество товара
      // = = = = = = = = = = = = = = = =

      depaby_model = productData.Model;                      // Записываю модель
      
      gpi_str_arr = localStorage.getItem("gpi_basket");     // Получаю объект в виде строки
      if (gpi_str_arr === null) {                             // Если функция вернула null, то
        localStorage.setItem("gpi_basket", "{}");         // Добавляю массив в БД
        gpi_str_arr = localStorage.getItem("gpi_basket"); // Получаю массив в виде строки
      }

      gpi_arr = JSON.parse(gpi_str_arr);                      // Строку в объект
      
      gpi_number = Number(num);                               // Получаю число из строки

      if (gpi_number > 0) {
        gpi_arr[depaby_model] = gpi_number;                    // Записываем в объект новое значение
      }

      if (gpi_number === 0) {
        delete gpi_arr[depaby_model];
      }

      gpi_str_arr = JSON.stringify(gpi_arr);                  // Превращаем объект в строку
      localStorage.setItem("gpi_basket", gpi_str_arr);      // Записываем строку в БД

      gpi_setCounter(gpi_number);
    }

    return (
      <div className={styles.product_info}>
        <div>
          <button
            onClick={close_window_about_products}
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
                        onClick={event => gpi_minus(productData.depaby_model)}
                      >-</button>
                      <button
                        className="btn btn-success"
                        onClick={event => gpi_plus(productData.depaby_model)}
                      >+</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Модель</td>
                  <td>{productData.depaby_model}</td>
                </tr>
                <tr>
                  <td>Картинка</td>
                  <td><img src={productData.depaby_img_href} alt="" /></td>
                </tr>
                <tr>
                  <td>Наименование</td>
                  <td>{productData.depaby_name}</td>
                </tr>
                <tr>
                  <td>В коробке</td>
                  <td>{productData.depaby_on_box}</td>
                </tr>
                <tr>
                  <td>Цена за одну штуку (BYN)</td>
                  <td>{productData.depaby_cost_byn}</td>
                </tr>
                <tr>
                  <td>Вес (кг)</td>
                  <td>{productData.depaby_kg}</td>
                </tr>
                <tr>
                  <td>Размер коробки (м3)</td>
                  <td>{productData.depaby_m3}</td>
                </tr>
                <tr>
                  <td>Компания</td>
                  <td>{productData.depaby_company}</td>
                </tr>
                <tr>
                  <td>Категория</td>
                  <td>{productData.depaby_category}</td>
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
      <h1>Продукты</h1>

      <div style={{
        display: isOpenInfoWin ? "block" : "none",
      }}>
        <ProductInfo depaby_model={productData.depaby_model} />
      </div>

      {
        productsArray.map(function (gpi_value, gpi_index) {
          return (
            <div
              key={gpi_index}
              className={`${styles.products__product} gpi_wrapper`}
            >
              <div className="gpi_content">
                <div className={styles.products_img}>
                  <img
                    src={gpi_value.depaby_img_href}
                    alt={`no img '${gpi_value.depaby_img_href}'`}
                  />
                </div>
                <div className={styles.products__model}>
                  {gpi_value.depaby_model}
                </div>
                <div>
                  {gpi_value.depaby_name}
                </div>
              </div>
              <div className="gpi_footer">
                <div className={styles.products__cost}>
                  {gpi_value.depaby_cost_byn} BYN
                </div>
                <div className={styles.products__more_button}>
                  <button onClick={() => open_window_about_products(gpi_index)}>
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

export default Products;
