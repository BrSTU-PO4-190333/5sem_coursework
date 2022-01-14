const Query = require('./Query');
const ObjectProduct = require('./ObjectProduct');

class QueryProducts extends Query {
  constructor(login, password) {
    super(login, password);
  }

  // = = = = = = = = = = = = CRUD: c - create = = = = = = = = = = = =
  async create(products_array = [{}]) {

    // Авторизуемся
    const auth_response = await this.auth();

    // Если авторизирован не успешно, то возврати ошибку
    if (auth_response.code != 200) {
      return auth_response;
    }

    try {
      let sql = "INSERT INTO `depaby_products` (`";

      // Получаю массив ключей (полей)
      const products_keys = ObjectProduct.get_keys();

      // Добавляю ключи (поля) через кавычки и запятую
      sql += products_keys.join("`, `");
      sql += "`) VALUES ('";

      // Получаю массив значений без ключей
      let products_values = [];
      for (let i = 0; i < products_array.length; ++i) {
        const product_object = new ObjectProduct(products_array[i]);
        products_values.push(product_object.get_values());
      }

      // Добавляю через запятую (одинарный массив), а массив массивов, через скобки
      sql += products_values.map(function (el) {
        return el.join("', '");
      }).join("'), ('");

      sql += "');";
      console.log(sql);

      // Выполняю SQL запрос
      const connect = await this.connect();
      const [rows, fields] = await connect.execute(sql);
      return {
        "code": 200,
        "message": "Added products in database",
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
        sql = `SELECT * FROM \`depaby_products\` WHERE \`depaby_id\` = '${params.id}';`;
      }

      // Получаем массив c сортировкой
      else if (params.sort) {
        switch (params.sort) {
          case "id":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_id\`;`;
            break;
          case "model":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_model\`;`;
            break;
          case "name":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_name\`;`;
            break;
          case "img_href":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_img_href\`;`;
            break;
          case "cost_byn":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_cost_byn\`;`;
            break;
          case "on_box":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_on_box\`;`;
            break;
          case "kg":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_kg\`;`;
            break;
          case "m3":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_m3\`;`;
            break;
          case "company":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_company\`;`;
            break;
          case "category":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_category\`;`;
            break;
          case "invert_id":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_id\` DESC;`;
            break;
          case "invert_model":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_model\` DESC;`;
            break;
          case "invert_name":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_name\` DESC;`;
            break;
          case "invert_img_href":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_img_href\` DESC;`;
            break;
          case "invert_cost_byn":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_cost_byn\` DESC;`;
            break;
          case "invert_on_box":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_on_box\` DESC;`;
            break;
          case "invert_kg":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_kg\` DESC;`;
            break;
          case "invert_m3":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_m3\` DESC;`;
            break;
          case "invert_company":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_company\` DESC;`;
            break;
          case "invert_category":
            sql = `SELECT * FROM \`depaby_products\` ORDER BY \`depaby_category\` DESC;`;
            break;
        }
      }

      // Получаем обычный массив
      else {
        sql = `SELECT * FROM \`depaby_products\`;`;
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
        sql = `DELETE FROM \`depaby_products\` WHERE \`depaby_id\` = '${params.id}';`;
      }
      else {
        sql = "TRUNCATE TABLE `depaby_products`;";
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
      let sql = "UPDATE `depaby_products` SET ";

      // Получаю массив ключей (полей)
      const products_keys = ObjectProduct.get_keys();

      const products_object = new ObjectProduct(data);
      const products_data = products_object.get();

      // Перечисляем ключ-равно-значение-запятая
      for (let i = 0; i < products_keys.length - 1; ++i) {
        const key = products_keys[i];
        const value = products_data[key];
        sql += `\`${key}\` = '${value}', `;
      }

      if (products_keys.length != 0) {
        const key = products_keys[products_keys.length - 1];
        const value = products_data[key];
        sql += `\`${key}\` = '${value}' `;
      }

      sql += `WHERE \`depaby_id\` = '${id}';`;
      console.log(sql);

      // Выполняю SQL запрос
      const connect = await this.connect();
      const [rows, fields] = await connect.execute(sql);
      return {
        code: 200,
        message: `Product updated by id = ${id}`,
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

module.exports = QueryProducts;
