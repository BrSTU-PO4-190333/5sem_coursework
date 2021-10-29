require('dotenv').config();
const gpi_sql_update = require("./gpi_sql_update");
const gpi_authentication = require("./gpi_authentication");

module.exports = function (request, response) {
    let body = "";
    request.on("data", chunk => {
        body += chunk.toString();
    });
    request.on("end", () => {
        let args = JSON.parse(body)
        console.log(args);

        let sql = gpi_sql_update(
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

        gpi_authentication(args, response, function (response, connnection) {
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
