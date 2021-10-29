require('dotenv').config();
const mysql = require('mysql');

module.exports = function (Args, res, func = null) {
    const connnection = mysql.createConnection({
        host: process.env.MySQL_HOST,
        user: process.env.MySQL_user,
        password: process.env.MySQL_password,
    });

    let sql = `SELECT * FROM \`${process.env.MySQL_DATABASE}\`.\`admins\`;`;
    connnection.query(sql, function (error, results, fields) {
        if (error) {
            connnection.end();
            console.log(error);
            return error;
        }

        //if value.login in array return value else null
        let object = null;
        results.forEach(
            (value) => {
                if (value["login"] == Args["login"]) {
                    object = value;
                }
            }
        );

        if (object == null) {
            // console.log("errLogin");
            res.send("errLogin");
            func = null;
            return;
        }

        if (object["password"] != Args["password"]) {
            // console.log("errPassword");
            res.send("errPassword");
            func = null;
            return;
        }

        if (func == null) {
            // console.log("noFunc");
            res.send("noFunc");
            func = null;
            return;
        }
        else {
            func(res, connnection);
        }
    });
}
