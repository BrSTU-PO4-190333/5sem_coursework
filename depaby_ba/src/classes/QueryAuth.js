const mysql_promise = require('mysql2/promise');

class QueryAuth {
  constructor(login, password) {
    this.login = login;
    this.password = password;
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
        "message": "User auth with success",
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
}

module.exports = QueryAuth;
