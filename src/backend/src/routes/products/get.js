const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const gpi_connect = require("../../scripts/gpi_connect");

router.get("/products/get", async function (req, res) {
    gpi_connect(req, res, async function (conn) {
        console.log(req.query);

        let gpi_sql = "";
        let gpi_id = req.query.id;
        let gpi_col = req.query.col;
        if (typeof(gpi_id) !== "undefined") {
            console.log(gpi_id);
            gpi_sql = `SELECT * FROM \`products\` WHERE \`ID\` = '${gpi_id}';`;
        }
        else if (typeof(gpi_col) !== "undefined") {
            let gpi_invert = req.query.invert;
            if (typeof(gpi_invert) !== "undefined") {
                gpi_sql = `SELECT * FROM \`products\` ORDER BY \`${gpi_col}\` DESC;`;
            }
            else {
                gpi_sql = `SELECT * FROM \`products\` ORDER BY \`${gpi_col}\`;`;
            }
        }
        else {
            gpi_sql = `SELECT * FROM \`products\` ORDER BY \`ID\` DESC;`;
        }
        console.log(gpi_sql);

        try {
            const [rows, fields] = await conn.execute(gpi_sql);
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
