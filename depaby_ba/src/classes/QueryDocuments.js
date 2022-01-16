const QueryAuth = require('./QueryAuth');
const ObjectDocument = require('./ObjectDocument');

class QueryDocuments extends QueryAuth {
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
                sql = `SELECT * FROM \`depaby_documents\` WHERE \`depaby_id\` = '${params.id}';`;
            }

            else if (params.category) {
                sql = `SELECT * FROM \`depaby_documents\` WHERE \`depaby_page_category\` = '${params.category}';`;
            }

            // Получаем обычный массив
            else {
                sql = `SELECT * FROM \`depaby_documents\`;`;
            }

            console.log(sql);

            // Выполняю SQL запрос
            const connect = await this.connect();
            const [rows] = await connect.execute(sql);
            return {
                code: 200,
                message: "Success get documents",
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
    async create(documents_array = [{}]) {

        // Авторизуемся
        const auth_response = await this.auth();

        // Если авторизирован не успешно, то возврати ошибку
        if (auth_response.code != 200) {
            return auth_response;
        }

        try {
            let sql = "INSERT INTO `depaby_documents` (`";

            // Получаю массив ключей (полей)
            const documents_keys = ObjectDocument.get_keys();

            // Добавляю ключи (поля) через кавычки и запятую
            sql += documents_keys.join("`, `");
            sql += "`) VALUES ('";

            // Получаю массив значений без ключей
            let documents_values = [];
            for (let i = 0; i < documents_array.length; ++i) {
                const document_object = new ObjectDocument(documents_array[i]);
                documents_values.push(document_object.get_values());
            }

            // Добавляю через запятую (одинарный массив), а массив массивов, через скобки
            sql += documents_values.map(function (el) {
                return el.join("', '");
            }).join("'), ('");

            sql += "');";
            console.log(sql);

            // Выполняю SQL запрос
            const connect = await this.connect();
            const [rows, fields] = await connect.execute(sql);
            return {
                "code": 200,
                "message": "Added documents in database",
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
                sql = `DELETE FROM \`depaby_documents\` WHERE \`depaby_id\` = '${params.id}';`;
            }
            else {
                sql = "TRUNCATE TABLE `depaby_documents`;";
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
            let sql = "UPDATE `depaby_documents` SET ";

            // Получаю массив ключей (полей)
            const documents_keys = ObjectDocument.get_keys();

            const documents_object = new ObjectDocument(data);
            const documents_data = documents_object.get();

            // Перечисляем ключ-равно-значение-запятая
            for (let i = 0; i < documents_keys.length - 1; ++i) {
                const key = documents_keys[i];
                const value = documents_data[key];
                sql += `\`${key}\` = '${value}', `;
            }

            if (documents_keys.length != 0) {
                const key = documents_keys[documents_keys.length - 1];
                const value = documents_data[key];
                sql += `\`${key}\` = '${value}' `;
            }

            sql += `WHERE \`depaby_id\` = '${id}';`;
            console.log(sql);

            // Выполняю SQL запрос
            const connect = await this.connect();
            const [rows, fields] = await connect.execute(sql);
            return {
                code: 200,
                message: `Document updated by id = ${id}`,
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

module.exports = QueryDocuments;
