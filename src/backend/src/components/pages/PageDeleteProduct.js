require('dotenv').config();
const Authentication = require("./../Authentication.js");

function PageDeleteProduct(request, response) {
    let body = "";
    request.on("data", chunk => {
        body += chunk.toString();
    });
    request.on("end", () => {
        let args = JSON.parse(body);
        console.log(args);

        let sql = `DELETE FROM \`${process.env.MySQL_DATABASE}\`.\`products\` WHERE ID=${args["ID"]};`;
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

module.exports = PageDeleteProduct;
