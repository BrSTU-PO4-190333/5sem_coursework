const express = require('express');
const router = express.Router();

const gpi_connect_auth = require("../../scripts/gpi_connect_auth");

router.post("/products/edit", function(req, res) {
    let gpi_body = "";
    req.on("data", chunk => {
        gpi_body += chunk.toString();
    });
    req.on("end", () => {
        const GPI_ARGS = JSON.parse(gpi_body);
        
        gpi_connect_auth(req, res, GPI_ARGS, async function(conn) {
            const ID = GPI_ARGS.id;
            const DATA = GPI_ARGS.data;
            
            let gpi_sql = "UPDATE `products` SET ";

            const DATA_KEYS = Object.keys(DATA);
            const ARR_KEY_VALUE = DATA_KEYS.map(key => {
                return `\`${key}\` = '${DATA[key]}'`;
            })

            gpi_sql += ARR_KEY_VALUE.join(", ");
            gpi_sql += ` WHERE \`ID\` = '${ID}';`;

            console.log(gpi_sql);

            try {
                const [rows, fields] = await conn.execute(gpi_sql);
                res.send('success');
            }
            catch(err) {
                console.log("\n < < < < < < < < < < = = = = = = = = = =");
                console.log(err);
                console.log("= = = = = = = = = = > > > > > > > > > > \n");
                res.send({ err: err });
            }
        });

    });
})

module.exports = router;
