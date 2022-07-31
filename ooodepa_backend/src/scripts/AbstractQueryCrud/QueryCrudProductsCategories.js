const AbstractQueryCrud = require("./AbstractQueryCrud");
const ObjectProductCategories = require("./../AbstractObject/ObjectProductCategories");

class QueryCrudProducts extends AbstractQueryCrud
{
    constructor (login, password) {
        super(login, password);
        this.pObjectClass = ObjectProductCategories;
        this.table = "depaby_product_categories";
    }

    get_read_sql(params = {}) {
        let sql = `SELECT * FROM \`${this.table}\`;`;
            
        // Получаем по ид
        if (params.id) {
            sql = `SELECT * FROM \`${this.table}\` WHERE \`depaby_id\` = '${params.id}';`;
        }

        // Получаем по категории
        else if (params.category) {
            sql = `SELECT * FROM \`${this.table}\` WHERE \`depaby_product_category\` = '${params.category}';`;
        }

        return sql;
    }
}

module.exports = QueryCrudProducts;
