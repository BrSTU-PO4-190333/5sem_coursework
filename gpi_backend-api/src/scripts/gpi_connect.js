const mysql = require('mysql2/promise');
const config = require("../gpi_MySQL_config");

module.exports = async function (req, res, func = function(){}) {
    try {
        // Connecting to the database
        const conn = await mysql.createConnection(config);
     
        func(conn);
    }
    catch (err) {
        console.log("\n < < < < < < < < < < = = = = = = = = = =");
        console.log(err);
        console.log("= = = = = = = = = = > > > > > > > > > > \n");
        res.send({ err: err })
    }
}
