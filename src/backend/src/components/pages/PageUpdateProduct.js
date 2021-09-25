require('dotenv').config();
const getUPDATEsqlCommand = require("./../sql/getUPDATEsqlCommand.js");
const Authentication = require("./../Authentication.js");

function PageUpdateProduct(request, response) {
    let body = "";
    request.on("data", chunk => {
        body += chunk.toString();
    });
    request.on("end", () => {
        let args = JSON.parse(body)
        console.log(args);

        let sql = getUPDATEsqlCommand(
            process.env.MySQL_DATABASE,
            "products",
            [
                "Model",
                "Name",
                "NameRU",
                "OnBox",
                "KG",
                "M3",
            ],
            args
        );

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
