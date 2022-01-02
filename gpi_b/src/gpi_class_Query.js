const gpi_mysql_promise = require('mysql2/promise');

class gpi_Query {
    constructor(gpi_login, gpi_password) {
        // gpi_ Объект для подключения к БД
        this.gpi_db_config = {
            host: process.env.gpi_mysql_host,
            user: process.env.gpi_mysql_username,
            password: process.env.gpi_mysql_password,
            database: process.env.gpi_mysql_database,
        };
        this.gpi_login = gpi_login;
        this.gpi_password = gpi_password;
    }

    async gpi_auth() {
        try {
            const gpi_connect = await gpi_mysql_promise.createConnection(this.gpi_db_config);
            const gpi_sql = `SELECT * FROM \`gpi_admins\` WHERE \`gpi_login\` = '${this.gpi_login}' AND \`gpi_password\` = '${this.gpi_password}';`;
            console.log(gpi_sql)
            const [gpi_rows] = await gpi_connect.execute(gpi_sql);

            // gpi_ Если записи не найдено, то неверный логин или пароль
            if (gpi_rows.length == 0) {
                return {
                    "gpi_msg": "Error auth: not found login or password",
                    "gpi_code": "ErrAuth",
                }
            }

            // gpi_ Если успешная авторизация
            return {
                "gpi_code": "success",
            };
        }
        // gpi_ Если ошибка MySQL
        catch (gpi_error) {
            return {
                "gpi_error": "" + gpi_error,
                "gpi_code": 500,
            };
        }
    }
}

module.exports = gpi_Query;
