const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const gpi_connect = require("./../scripts/gpi_connect");

router.get("/gpi_get_products", async function (req, res) {
    gpi_connect(req, res, async function (conn) {
        try {
            const GPI_SQL = mysql.format("SELECT * FROM `products` ORDER BY `ID` DESC;");
            console.log(GPI_SQL);
            const [rows, fields] = await conn.execute(GPI_SQL);
            res.send(rows);
        }
        catch (err) {
            console.log("\n < < < < < < < < < < = = = = = = = = = =");
            console.log(err);
            console.log("= = = = = = = = = = > > > > > > > > > > \n");
            res.send({ err: err });
        }
    });
});

module.exports = router;
