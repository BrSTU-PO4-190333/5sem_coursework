require('dotenv').config();
const gpi_sql_insert = require("./gpi_sql_insert");
const mysql = require('mysql');

module.exports = function (request, response) {
    const connnection = mysql.createConnection({
        host: process.env.MySQL_HOST,
        user: process.env.MySQL_user,
        password: process.env.MySQL_password,
    });

    let body = "";
    request.on("data", chunk => {
        body += chunk.toString();
    });
    request.on("end", () => {
        let args = JSON.parse(body)
        console.log(args);

        let sql = `SELECT * FROM \`${process.env.MySQL_DATABASE}\`.\`admins\``;
        connnection.query(sql, function (error, results, fields) {
            if (error) {
                connnection.end();
                console.log(error);
                return error;
            }

            for (let i = 0; i < results.length; i += 1) {
                if (results[i]["login"] == args["login"]) {
                    response.send("loginIsBusy");   // логин занят
                    return;
                }
            }

            sql = gpi_sql_insert(
                process.env.MySQL_DATABASE,
                "admins",
                [
                    "login",
                    "password",
                ],
                args
            );

            connnection.query(sql, function (error, results, fields) {
                if (error) {
                    connnection.end();
                    console.log(error);
                    return error;
                }

                response.send("regiseredNow");  // логин зарегистрирован сейчас
            });
        });
    });
}
