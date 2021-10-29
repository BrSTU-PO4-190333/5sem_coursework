module.exports = function (database, table, args, values) {
    let sql = `UPDATE \`${database}\`.\`${table}\` SET `;
    for (let i = 0; i < args.length - 1; i += 1) {
        sql += `\`${args[i]}\`='${values[args[i]]}', `;
    }
    sql += `\`${args[args.length - 1]}\`=${values[args[args.length - 1]]} `;
    sql += `WHERE ${table}.ID = ${values["ID"]};`;
    return sql;
}
