const QueryAuth = require('./QueryAuth');
const ObjectProductCategories = require('./ObjectProductCategories');

class QueryProductCategoriess extends QueryAuth {
  constructor(login, password) {
    super(login, password);
  }

  // = = = = = = = = = = = = CRUD: c - create = = = = = = = = = = = =
  async create(productCategories_array = [{}]) {

    // Авторизуемся
    const auth_response = await this.auth();

    // Если авторизирован не успешно, то возврати ошибку
    if (auth_response.code != 200) {
      return auth_response;
    }

    try {
      let sql = "INSERT INTO `depaby_product_categories` (`";

      // Получаю массив ключей (полей)
      const productCategories_keys = ObjectProductCategories.get_keys();

      // Добавляю ключи (поля) через кавычки и запятую
      sql += productCategories_keys.join("`, `");
      sql += "`) VALUES ('";

      // Получаю массив значений без ключей
      let productCategories_values = [];
      for (let i = 0; i < productCategories_array.length; ++i) {
        const productCategories_object = new ObjectProductCategories(productCategories_array[i]);
        productCategories_values.push(productCategories_object.get_values());
      }

      // Добавляю через запятую (одинарный массив), а массив массивов, через скобки
      sql += productCategories_values.map(function (el) {
        return el.join("', '");
      }).join("'), ('");

      sql += "');";
      console.log(sql);

      // Выполняю SQL запрос
      const connect = await this.connect();
      const [rows, fields] = await connect.execute(sql);
      return {
        "code": 200,
        "message": "Added productCategories in database",
      };
    }
    catch (err) {
      return {
        "code": 418,
        "message": "" + err,
      };
    }
  }

  // = = = = = = = = = = = = CRUD: r -read = = = = = = = = = = = =
  async read(params = {}) {
    try {
      let sql = "";
      console.log(params);

      // Получаем по ид
      if (params.id) {
        sql = `SELECT * FROM \`depaby_product_categories\` WHERE \`depaby_id\` = '${params.id}';`;
      }

      // Получаем обычный массив
      else {
        sql = `SELECT * FROM \`depaby_product_categories\`;`;
      }

      console.log(sql);

      // Выполняю SQL запрос
      const connect = await this.connect();
      const [rows] = await connect.execute(sql);
      return {
        code: 200,
        message: "Success get productCategories",
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
        sql = `DELETE FROM \`depaby_product_categories\` WHERE \`depaby_id\` = '${params.id}';`;
      }
      else {
        sql = "TRUNCATE TABLE `depaby_product_categories`;";
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
      let sql = "UPDATE `depaby_product_categories` SET ";

      // Получаю массив ключей (полей)
      const productCategories_keys = ObjectProductCategories.get_keys();

      const productCategories_object = new ObjectProductCategories(data);
      const productCategories_data = productCategories_object.get();

      // Перечисляем ключ-равно-значение-запятая
      for (let i = 0; i < productCategories_keys.length - 1; ++i) {
        const key = productCategories_keys[i];
        const value = productCategories_data[key];
        sql += `\`${key}\` = '${value}', `;
      }

      if (productCategories_keys.length != 0) {
        const key = productCategories_keys[productCategories_keys.length - 1];
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
        message: `ProductCategories updated by id = ${id}`,
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

module.exports = QueryProductCategoriess;
