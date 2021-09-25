function GetSQLstring(command, database, table, args, values) {
    let sql = `${command} \`${database}\`.\`${table}\` (`;
    for (let i = 0; i < args.length - 1; i += 1) {
        sql += `\`${args[i]}\`, `;
    }
    sql += `\`${args[args.length - 1]}\`) VALUES (`;
    for (let i = 0; i < args.length - 1; i += 1) {
        sql += `'${values[args[i]]}', `;
    }
    sql += `'${values[args[args.length - 1]]}');`;
    return sql;
}

module.exports = GetSQLstring;
