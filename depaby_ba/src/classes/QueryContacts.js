const QueryAuth = require('./QueryAuth');
const ObjectContact = require('./ObjectContacts');

class QueryContacts extends QueryAuth {
    constructor(login, password) {
        super(login, password);
    }

    // = = = = = = = = = = = = CRUD: r -read = = = = = = = = = = = =
    async read(params = {}) {
        try {
            let sql = "";
            console.log(params);

            // Получаем по ид
            if (params.id) {
                sql = `SELECT * FROM \`depaby_contacts\` WHERE \`depaby_id\` = '${params.id}';`;
            }

            else if (params.category) {
                sql = `SELECT * FROM \`depaby_contacts\` WHERE \`depaby_page_category\` = '${params.category}';`;
            }

            // Получаем обычный массив
            else {
                sql = `SELECT * FROM \`depaby_contacts\`;`;
            }

            console.log(sql);

            // Выполняю SQL запрос
            const connect = await this.connect();
            const [rows] = await connect.execute(sql);
            return {
                code: 200,
                message: "Success get contacts",
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

    // = = = = = = = = = = = = CRUD: c - create = = = = = = = = = = = =
    async create(contacts_array = [{}]) {

        // Авторизуемся
        const auth_response = await this.auth();

        // Если авторизирован не успешно, то возврати ошибку
        if (auth_response.code != 200) {
            return auth_response;
        }

        try {
            let sql = "INSERT INTO `depaby_contacts` (`";

            // Получаю массив ключей (полей)
            const contacts_keys = ObjectContact.get_keys();

            // Добавляю ключи (поля) через кавычки и запятую
            sql += contacts_keys.join("`, `");
            sql += "`) VALUES ('";

            // Получаю массив значений без ключей
            let contacts_values = [];
            for (let i = 0; i < contacts_array.length; ++i) {
                const contact_object = new ObjectContact(contacts_array[i]);
                contacts_values.push(contact_object.get_values());
            }

            // Добавляю через запятую (одинарный массив), а массив массивов, через скобки
            sql += contacts_values.map(function (el) {
                return el.join("', '");
            }).join("'), ('");

            sql += "');";
            console.log(sql);

            // Выполняю SQL запрос
            const connect = await this.connect();
            const [rows, fields] = await connect.execute(sql);
            return {
                "code": 200,
                "message": "Added contacts in database",
            };
        }
        catch (err) {
            return {
                "code": 418,
                "message": "" + err,
            };
        }
    }

    // = = = = = = = = = = = = CRUD: d - delete = = = = = = = = = = = =

    async delete(params) {
        const auth_response = await this.auth();

        // Если авторизирован не успешно, то возврати ошибку
        if (auth_response.code != 200) {
            return auth_response;
        }

        try {
            let sql = "";

            if (params.id) {
                sql = `DELETE FROM \`depaby_contacts\` WHERE \`depaby_id\` = '${params.id}';`;
            }
            else {
                sql = "TRUNCATE TABLE `depaby_contacts`;";
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

    // = = = = = = = = = = = = CRUD: u - update = = = = = = = = = = = =

    async update(id = -1, data = {}) {
        const auth_response = await this.auth();

        // Если авторизирован не успешно, то возврати ошибку
        if (auth_response.code != 200) {
            console.log(auth_response);
            return auth_response;
        }

        try {
            let sql = "UPDATE `depaby_contacts` SET ";

            // Получаю массив ключей (полей)
            const contacts_keys = ObjectContact.get_keys();

            const contacts_object = new ObjectContact(data);
            const contacts_data = contacts_object.get();

            // Перечисляем ключ-равно-значение-запятая
            for (let i = 0; i < contacts_keys.length - 1; ++i) {
                const key = contacts_keys[i];
                const value = contacts_data[key];
                sql += `\`${key}\` = '${value}', `;
            }

            if (contacts_keys.length != 0) {
                const key = contacts_keys[contacts_keys.length - 1];
                const value = contacts_data[key];
                sql += `\`${key}\` = '${value}' `;
            }

            sql += `WHERE \`depaby_id\` = '${id}';`;
            console.log(sql);

            // Выполняю SQL запрос
            const connect = await this.connect();
            const [rows, fields] = await connect.execute(sql);
            return {
                code: 200,
                message: `Contact updated by id = ${id}`,
            };
        }
        catch (err) {
            return {
                code: 418,
                message: "" + err,
            };
        }
    }
}

module.exports = QueryContacts;
