const mysql = require('mysql2/promise');
const config = require("../gpi_MySQL_config");

module.exports = async function (req, res, func = function(){}) {
    try {
        // Connecting to the database
        const conn = await mysql.createConnection(config);

        // We get a login and password
        const gpi_SQL = mysql.format("SELECT * FROM `admins` WHERE ?", {
            login: req.query.login
        });
        const [rows, fields] = await conn.execute(gpi_SQL);
        
        // Login verification
        if (rows.length == 0) {
            conn.end();
            res.send("errLogin");
            return;
        }

        // Password verification
        if (rows[0].password != req.query.password) {
            conn.end();
            res.send("errPassword");
            return;
        }
        
        func(conn);
    }
    catch (err) {
        console.log("\n < < < < < < < < < < = = = = = = = = = =");
        console.log(err);
        console.log("= = = = = = = = = = > > > > > > > > > > \n");
        res.send({ err: err })
    }
}
