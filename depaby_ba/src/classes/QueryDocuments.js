const QueryAuth = require('./QueryAuth');

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
        message: "Success get products",
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
}

module.exports = QueryDocuments;
