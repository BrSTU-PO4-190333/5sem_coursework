const AbstractQueryCrud = require("./AbstractQueryCrud");
const ObjectContact = require("./../AbstractObject/ObjectContact");

class QueryCrudContacts extends AbstractQueryCrud
{
    constructor (login, password) {
        super(login, password);
        this.pObjectClass = ObjectContact;
        this.table = "depaby_contacts";
    }

    get_read_sql(params = {}) {
        let sql = `SELECT * FROM \`${this.table}\`;`;
            
        // Получаем по ид
        if (params.id) {
            sql = `SELECT * FROM \`${this.table}\` WHERE \`depaby_id\` = '${params.id}';`;
        }

        return sql;
    }
}

module.exports = QueryCrudContacts;
