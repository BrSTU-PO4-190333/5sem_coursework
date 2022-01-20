const AbstractQueryCrud = require("./AbstractQueryCrud");
const ObjectProduct = require("./../AbstractObject/ObjectProduct");

class QueryCrudProducts extends AbstractQueryCrud
{
    constructor (login, password) {
        super(login, password);
        this.pObjectClass = ObjectProduct;
        this.table = "depaby_products";
    }

    get_read_sql(params = {}) {
        let sql = `SELECT * FROM \`${this.table}\`;`;
            
        // Получаем по ид
        if (params.id) {
            sql = `SELECT * FROM \`${this.table}\` WHERE \`depaby_id\` = '${params.id}';`;
        }

        // Получаем по модели
        else if (params.model) {
            sql = `SELECT * FROM \`${this.table}\` WHERE \`depaby_model\` = '${params.model}';`;
        }

        // Получаем по категории
        else if (params.category) {
            sql = `SELECT * FROM \`${this.table}\` WHERE \`depaby_category\` = '${params.category}';`;
        }

        // Получаем по масиву моделей
        else if (params.array_models) {
            sql = `SELECT * FROM \`${this.table}\` WHERE \`depaby_model\` = '`;
            console.log(params.array_models);
            console.log(params.array_models);
            console.log(params.array_models);
            let arr = JSON.parse(params.array_models);
            console.log(arr);
            console.log(arr);
            console.log(arr);
            sql += arr.join(`' OR \`depaby_model\` = '`);
            sql += `';`;
        }
        return sql;
    }
}

module.exports = QueryCrudProducts;
