require('dotenv').config();
const getINSERTINTOsqlCommand = require("./../sql/getINSERTINTOsqlCommand.js");
const Authentication = require("./../Authentication.js");

function PageAddProduct(request, response) {
    let body = "";
    request.on("data", chunk => {
        body += chunk.toString();
    });
    request.on("end", () => {
        let args = JSON.parse(body)
        console.log(args);

        let sql = getINSERTINTOsqlCommand(
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

    })
}

module.exports = PageAddProduct;
