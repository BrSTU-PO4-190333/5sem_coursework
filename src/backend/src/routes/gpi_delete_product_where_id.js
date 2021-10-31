const express = require('express');
const router = express.Router();

const gpi_connect_auth = require("../scripts/gpi_connect_auth");

router.post("/gpi_delete_product_where_id", function(req, res) {
    let gpi_body = "";
    req.on("data", chunk => {
        gpi_body += chunk.toString();
    });
    req.on("end", () => {
        const GPI_ARGS = JSON.parse(gpi_body);
        
        gpi_connect_auth(req, res, GPI_ARGS, async function(conn) {
            try {
                const GPI_SQL = `DELETE FROM \`products\` WHERE \`ID\` = '${GPI_ARGS.ID}';`;
                console.log(GPI_SQL);
                await conn.execute(GPI_SQL);
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
