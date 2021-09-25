require('dotenv').config();
const GetUrlArgs = require("./GetUrlArgs.js");
const Authentication = require("./Authentication.js");

function PageUpdateProduct(request, response) {
    let body = "";
    request.on("data", chunk => {
        body += chunk.toString();
    });
    request.on("end", () => {
        let args = JSON.parse(body)
        console.log(args);

        let sql = `UPDATE \`${process.env.MySQL_DATABASE}\`.\`products\``;
        sql += ` SET \`Model\`='${args["Model"]}'`;
        sql += `, `;
        sql += `\`Name\`='${args["Name"]}'`;
        sql += `, `;
        sql += `\`NameRU\`='${args["NameRU"]}'`;
        sql += `, `;
        sql += `\`OnBox\`='${args["OnBox"]}'`;
        sql += `, `;
        sql += `\`KG\`='${args["KG"]}'`;
        sql += `, `;
        sql += `\`M3\`='${args["M3"]}'`;
        sql += ` WHERE products.ID = ${args["ID"]}`;

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
    });
}

module.exports = PageUpdateProduct;
