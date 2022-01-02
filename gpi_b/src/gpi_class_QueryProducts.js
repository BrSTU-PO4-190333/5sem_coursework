const gpi_mysql_promise = require('mysql2/promise');
const gpi_class_Query = require('./gpi_class_Query');
const gpi_class_ObjectProduct = require('./gpi_class_ObjectProduct');

class gpi_QueryProducts extends gpi_class_Query{
    constructor(gpi_login, gpi_password) {
        super(gpi_login, gpi_password);
    }

    // gpi_ Метод, который получает продукты
    async gpi_get_products(gpi_params = {}) {
        // gpi_ Подключаемся к БД и получаем данные по SQL 
        try {
            // gpi_ Формирую SQL запрос
            let gpi_sql = "";
            
            if ("gpi_id" in gpi_params) {
                let gpi_id = gpi_params.gpi_id;
                gpi_sql = `SELECT * FROM \`gpi_products\` WHERE \`gpi_id\` = '${gpi_id}';`; 
            }
            else if (gpi_params.gpi_invert == "true") {
                gpi_sql = `SELECT * FROM \`gpi_products\` ORDER BY \`gpi_id\` DESC;`;
            }
            else {
                gpi_sql = `SELECT * FROM \`gpi_products\`;`;
            }

            console.log(gpi_sql);

            // gpi_ Выполняю SQL запрос
            const gpi_connect = await gpi_mysql_promise.createConnection(this.gpi_db_config);
            const [gpi_rows] = await gpi_connect.execute(gpi_sql);
            return gpi_rows;
        }
        // gpi_ Если ошибка MySQL
        catch (gpi_error) {
            return {
                "gpi_code": 500, 
                "gpi_msg": "" + gpi_error, 
            };
        }
    }

    // gpi_ Метод, который добавляет продукты
    async gpi_add_products(gpi_array = [{}]) {
        // gpi_ Если авторизирован не успешно, то возврати прошлую ошибку
        const gpi_auth_res = await this.gpi_auth();
        if (gpi_auth_res.gpi_code != "success") {
            console.log(gpi_auth_res.gpi_code)
            return gpi_auth_res;
        }

        // gpi_ Если авторизирован успешно
        // gpi_ Подключаемся к БД и получаем данные по SQL 
        try {
            // gpi_ Формирую SQL запрос
            let gpi_sql = "INSERT INTO `gpi_products` (`";
            // gpi_ Получаю массив ключей (полей)
            const gpi_product_keys = gpi_class_ObjectProduct.gpi_get_keys();
            // gpi_ Добавляю ключи (поля) через кавычки и запятую
            gpi_sql += gpi_product_keys.join("`, `");
            gpi_sql += "`) VALUES ('";
            // gpi_ Получаю массив значений без ключей
            let gpi_product_values = [];
            for (let gpi_i = 0; gpi_i < gpi_array.length; ++gpi_i) {
                const gpi_obj = new gpi_class_ObjectProduct(gpi_array[gpi_i]);
                gpi_product_values.push(gpi_obj.gpi_get_values());
            }
            // gpi_ Добавляю значения через запятую (одинарный массив), а массив массивов, через скобки
            gpi_sql += gpi_product_values.map(function(el) {
                return el.join("', '");
            }).join("'), ('");
            // gpi_ Конец SQL запроса
            gpi_sql += "');";
            console.log(gpi_sql);

            // gpi_ Выполняю SQL запрос
            const gpi_connect = await gpi_mysql_promise.createConnection(this.gpi_db_config);
            const [rows, fields] = await gpi_connect.execute(gpi_sql);
            return {
                "gpi_code": "success",
                "gpi_msg": "Added products in database",
            };
        }
        catch (gpi_error) {
            return {
                "gpi_code": 500, 
                "gpi_msg": "" + gpi_error, 
            };
        }
    }

    // gpi_ Метод, который очищает таблицу продуктов
    async gpi_delete_table_products() {
        // gpi_ Если авторизирован не успешно, то возврати прошлую ошибку
        const gpi_auth_res = await this.gpi_auth();
        if (gpi_auth_res.gpi_code != "success") {
            console.log(gpi_auth_res.gpi_code)
            return gpi_auth_res;
        }

        // gpi_ Если авторизирован успешно
        // gpi_ Подключаемся к БД и получаем данные по SQL 
        try {
            // gpi_ Формирую SQL запрос
            let gpi_sql = "TRUNCATE TABLE `gpi_products`;";
            console.log(gpi_sql);

            // gpi_ Выполняю SQL запрос
            const gpi_connect = await gpi_mysql_promise.createConnection(this.gpi_db_config);
            const [rows, fields] = await gpi_connect.execute(gpi_sql);
            return {
                "gpi_code": "success",
                "gpi_msg": "Table 'gpi_products' deleted",
            };
        }
        catch (gpi_error) {
            return {
                "gpi_code": 500, 
                "gpi_msg": "" + gpi_error, 
            };
        }
    }

    // gpi_ Метод, который удаляет продукт по ид
    async gpi_delete_product(gpi_id) {
        // gpi_ Если авторизирован не успешно, то возврати прошлую ошибку
        const gpi_auth_res = await this.gpi_auth();
        if (gpi_auth_res.gpi_code != "success") {
            console.log(gpi_auth_res.gpi_code)
            return gpi_auth_res;
        }

        // gpi_ Если авторизирован успешно
        // gpi_ Подключаемся к БД и получаем данные по SQL 
        try {
            // gpi_ Формирую SQL запрос
            let gpi_sql = `DELETE FROM \`gpi_products\` WHERE \`gpi_id\` = '${gpi_id}';`;
            console.log(gpi_sql);

            // gpi_ Выполняю SQL запрос
            const gpi_connect = await gpi_mysql_promise.createConnection(this.gpi_db_config);
            const [rows, fields] = await gpi_connect.execute(gpi_sql);
            return {
                "gpi_code": "success",
                "gpi_msg": `Deleted element by id ${gpi_id} on table 'gpi_products'`,
            };
        }
        catch (gpi_error) {
            return {
                "gpi_code": 500, 
                "gpi_msg": "" + gpi_error, 
            };
        }
    }

    // gpi_ Метод, который редактирует продукт по ид
    async gpi_update_product(gpi_id = -1, gpi_data = {}) {
        // gpi_ Если авторизирован не успешно, то возврати прошлую ошибку
        const gpi_auth_res = await this.gpi_auth();
        if (gpi_auth_res.gpi_code != "success") {
            console.log(gpi_auth_res.gpi_code)
            return gpi_auth_res;
        }

        // gpi_ Если авторизирован успешно
        // gpi_ Подключаемся к БД и получаем данные по SQL 
        try {
            // gpi_ Формирую SQL запрос
            let gpi_sql = "UPDATE `gpi_products` SET ";
            // gpi_ Получаю массив ключей (полей)
            const gpi_obj = new gpi_class_ObjectProduct(gpi_data);
            const gpi_product_data = gpi_obj.gpi_get();
            const gpi_product_keys = gpi_class_ObjectProduct.gpi_get_keys();
            // gpi_ Перечисляем ключ равно значение через запятую
            for (let gpi_i = 0; gpi_i < gpi_product_keys.length - 1; ++gpi_i) {
                const gpi_key = gpi_product_keys[gpi_i];
                const gpi_value = gpi_product_data[gpi_key];
                gpi_sql += `\`${gpi_key}\` = '${gpi_value}', `;
            }

            if (gpi_product_keys.length != 0) {
                const gpi_key = gpi_product_keys[gpi_product_keys.length - 1];
                const gpi_value = gpi_product_data[gpi_key];
                gpi_sql += `\`${gpi_key}\` = '${gpi_value}' `;
            }

            // gpi_ Конец SQL запроса
            gpi_sql += `WHERE \`gpi_id\` = '${gpi_id}';`;
            console.log(gpi_sql);

            // gpi_ Выполняю SQL запрос
            const gpi_connect = await gpi_mysql_promise.createConnection(this.gpi_db_config);
            const [rows, fields] = await gpi_connect.execute(gpi_sql);
            return {
                "gpi_code": "success",
                "gpi_msg": `Product updated by id = ${gpi_id}`,
            };
        }
        catch (gpi_error) {
            return {
                "gpi_code": 500, 
                "gpi_msg": "" + gpi_error, 
            };
        }
    }
}

module.exports = gpi_QueryProducts;
