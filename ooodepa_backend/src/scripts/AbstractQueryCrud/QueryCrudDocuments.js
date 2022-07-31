const AbstractQueryCrud = require("./AbstractQueryCrud");
const ObjectDocument = require("./../AbstractObject/ObjectDocument");

class QueryCrudDocuments extends AbstractQueryCrud
{
    constructor (login, password) {
        super(login, password);
        this.pObjectClass = ObjectDocument;
        this.table = "depaby_documents";
    }

    get_read_sql(params = {}) {
        let sql = `SELECT * FROM \`${this.table}\`;`;
            
        // Получаем по ид
        if (params.id) {
            sql = `SELECT * FROM \`${this.table}\` WHERE \`depaby_id\` = '${params.id}';`;
        }

        // Получаем по категории
        else if (params.category) {
            sql = `SELECT * FROM \`${this.table}\` WHERE \`depaby_page_category\` = '${params.category}';`;
        }

        return sql;
    }
}

module.exports = QueryCrudDocuments;
