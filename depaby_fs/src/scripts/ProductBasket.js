class ProductBasket
{
    // Метод возращает корзину
    static read() {
        // Получаем данные с БД
        let str = localStorage.getItem("depaby_products_basket");
        // Если нет данных, возвращаем пустой объект
        if (str == null) {
            return {};
        }
        // Превращает данные с БД в объект JS
        let object = JSON.parse(str);
        // Возвращаем объект
        return object;
    }

    // Метод удаляет из корзины модель
    static delete(model = '') {
        // Получаем данные с БД
        let str = localStorage.getItem("depaby_products_basket");
        // Если нет данных, то нет чего удалять - выходим
        if (str == null) {
            return;
        }
        // Превращает данные с БД в объект JS
        let object = JSON.parse(str);
        // Удаляем по ключю
        delete object[model];
        // Превращаем объект в строку
        str = JSON.stringify(object);
        // Загружаем данные в БД
        localStorage.setItem("depaby_products_basket", str);
    }

    // Метод возращает количество по модели
    static getCount(model) {
        // Получаем данные с БД
        let str = localStorage.getItem("depaby_products_basket");
        // Если нет данных, то возвращаем 0
        if (str == null) {
            return 0;
        }
        // Превращает данные с БД в объект JS
        let object = JSON.parse(str);
        // Если ключ (модель) существует, то возвращаем значение
        if (object[model]) {
            return object[model];
        }
        // Если не выполнялся if, то у нас 0
        return 0;
    }

    // Метод возращает модели, которые есть в корзине
    static getModels() {
        // Получаем данные с БД
        let str = localStorage.getItem("depaby_products_basket");
        // Если нет данных, то возвращаем пустой массив
        if (str == null) {
            return [];
        }
        // Превращает данные с БД в объект JS
        let object = JSON.parse(str);
        // Берём у объекта ключи
        let array_models = Object.keys(object);
        // Создаем новый массив
        let array = [];
        // В цикле перепроверяем значение количество, чтобы не оказался бред
        array_models.forEach(function(value, index) {
            if (object[value] > 0) {
                array.push(`${value}`);
            }
        });
        // Возвращем новый ключей (моделей)
        return array_models;
    }

    //Метод задает под моделью model значение count
    static setCount(model, count) {
        // Получаем данные с БД
        let str = localStorage.getItem("depaby_products_basket");
        // Создаем пустой объект
        let object = {};
        // Если строка не пустая, то преобразуем строку в JS объект
        if (str !== null) {
            object = JSON.parse(str);
        }
        // Если количество меньше или равно нулю, то записываем 0, иначе значение count
        object[model] = count <= 0 ? 0 : count;
        // Преобразуем объект в строку
        str = JSON.stringify(object);
        // Записываем данные в БД
        localStorage.setItem("depaby_products_basket", str);
    }
}

export default ProductBasket;
