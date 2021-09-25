require('dotenv').config();
const Authentication = require("./Authentication.js");

function PageAddProduct(request, response) {
    let body = "";
    request.on("data", chunk => {
        body += chunk.toString();
    });
    request.on("end", () => {
        let args = JSON.parse(body)
        console.log(args);

        let sql = `INSERT INTO \`${process.env.MySQL_DATABASE}\`.\`products\``;
        sql += "(`Model`, `Name`, `NameRU`, `OnBox`, `KG`, `M3`) ";
        sql += `VALUES (`;
        sql += `'${args["Model"]}'`;
        sql += `,`;
        sql += `'${args["Name"]}'`;
        sql += `,`;
        sql += `'${args["NameRU"]}'`;
        sql += `,`;
        sql += `'${args["OnBox"]}'`;
        sql += `,`;
        sql += `'${args["KG"]}'`;
        sql += `,`;
        sql += `'${args["M3"]}'`;
        sql += `);`;

        Authentication(args, response, function (response, connnection) {
            connnection.query(sql, function (error, results, fields) {
                connnection.end();
                if (error) {
                    connnection.end();
                    console.log(error);
                    return error;
                }
                response.sendStatus(200);
            });
        });

    })
}

module.exports = PageAddProduct;
