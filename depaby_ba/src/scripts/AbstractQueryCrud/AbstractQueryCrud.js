const mysql_promise = require('mysql2/promise');

const AbstractObject = require('../AbstractObject/AbstractObject');

class AbstractQueryCrud {
    constructor(login, password) {
        this.login = login;
        this.password = password;
        this.pObjectClass = AbstractObject;
        this.table = "depaby_someTable";
    }

    async connect() {
        return await mysql_promise.createConnection({
            host: process.env.depaby_mysql_host,
            user: process.env.depaby_mysql_username,
            password: process.env.depaby_mysql_password,
            database: process.env.depaby_mysql_database,
        })
    }

    async auth() {
        try {
            const connect = await this.connect();
            const sql = `SELECT * FROM \`depaby_admins\` WHERE \`depaby_login\` = '${this.login}' AND \`depaby_password\` = '${this.password}';`;
            console.log(sql);
            const [rows] = await connect.execute(sql);

            // Если записи не найдено, то неверный логин или пароль
            if (rows.length == 0) {
                return {
                    "code": 202,
                    "message": "Error auth: not found login or password",
                }
            }

            // depaby_ Если успешная авторизация
            return {
                "code": 200,
                "message": "Auth with success",
            };
        }
        // depaby_ Если ошибка MySQL
        catch (err) {
            return {
                "code": 418,
                "message": "" + err,
            };
        }
    }

    async create(array = [{}]) {
        // Авторизуемся
        const auth_response = await this.auth();

        // Если авторизирован не успешно, то возврати ошибку
        if (auth_response.code != 200) {
            return auth_response;
        }

        try {
            let sql = `INSERT INTO \`${this.table}\` (\``;

            // Получаю массив ключей
            const keys = this.pObjectClass.get_keys();

            // Добавляю ключи в кавычках через запятую
            sql += keys.join("`, `");
            sql += "`) VALUES ('";

            // Получаю массив значений без ключей
            let values = [];
            for (let i = 0; i < array.length; ++i) {
                const class_instance = new this.pObjectClass(array[i]);
                values.push(class_instance.get_values());
            }

            // Добавляю через запятую значение полей
            sql += values.map(function (el) {
                return el.join("', '");
            }).join("'), ('"); // Добавляю через скобки следующий элемент массива

            sql += "');";
            console.log(sql);

            // Выполняю SQL запрос
            const connect = await this.connect();
            const [rows, fields] = await connect.execute(sql);
            return {
                "code": 200,
                "message": "Added data in database with success",
            };
        }
        catch (err) {
            return {
                "code": 418,
                "message": "" + err,
            };
        }
    }

    get_read_sql(params = {}) {
        let sql = `SELECT * FROM \`${this.table}\`;`;
            
        // Получаем по ид
        if (params.id) {
            sql = `SELECT * FROM \`${this.table}\` WHERE \`depaby_id\` = '${params.id}';`;
        }

        return sql;
    }

    async read(params = {}) {
        try {
            const sql = this.get_read_sql(params);
            console.log(params);
            console.log(sql);

            // Выполняю SQL запрос
            const connect = await this.connect();
            const [rows] = await connect.execute(sql);
            return {
                code: 200,
                message: "Success get data",
                data: rows,
            };
        }
        // depaby_ Если ошибка MySQL
        catch (err) {
            return {
                "code": 418,
                "message": "" + err,
            };
        }
    }

    async update(id = -1, data = {}) {
        // Авторизуемся
        const auth_response = await this.auth();

        // Если авторизирован не успешно, то возврати ошибку
        if (auth_response.code != 200) {
            console.log(auth_response);
            return auth_response;
        }

        try {
            let sql = `UPDATE \`${this.table}\` SET `;

            // Получаю массив ключей
            const keys = this.pObjectClass.get_keys();

            const class_instance = new this.pObjectClass(data);
            const productCategories_data = class_instance.get();

            // Перечисляем ключ-равно-значение-запятая
            for (let i = 0; i < keys.length - 1; ++i) {
                const key = keys[i];
                const value = productCategories_data[key];
                sql += `\`${key}\` = '${value}', `;
            }

            if (keys.length != 0) {
                const key = keys[keys.length - 1];
                const value = productCategories_data[key];
                sql += `\`${key}\` = '${value}' `;
            }

            sql += `WHERE \`depaby_id\` = '${id}';`;
            console.log(sql);

            // Выполняю SQL запрос
            const connect = await this.connect();
            const [rows, fields] = await connect.execute(sql);
            return {
                code: 200,
                message: `Data updated on id = ${id}`,
            };
        }
        catch (err) {
            return {
                code: 418,
                message: "" + err,
            };
        }
    }

    async delete(params) {
        // Авторизуемся
        const auth_response = await this.auth();

        // Если авторизирован не успешно, то возврати ошибку
        if (auth_response.code != 200) {
            return auth_response;
        }

        try {
            let sql = `TRUNCATE TABLE \`${this.table}\`;`;

            if (params.id) {
                sql = `DELETE FROM \`${this.table}\` WHERE \`depaby_id\` = '${params.id}';`;
            }

            console.log(sql);

            // Выполняю SQL запрос
            const connect = await this.connect();
            const [rows, fields] = await connect.execute(sql);
            return {
                "code": 200,
                "message": "Deleted with success",
            };
        }
        catch (gpi_error) {
            return {
                "code": 418,
                "message": "" + gpi_error,
            };
        }
    }
};

module.exports = AbstractQueryCrud;
