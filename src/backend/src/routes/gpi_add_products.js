const express = require('express');
const router = express.Router();

const gpi_connect_auth = require("../scripts/gpi_connect_auth");

router.post("/gpi_add_products", function(req, res) {
    let gpi_body = "";
    req.on("data", chunk => {
        gpi_body += chunk.toString();
    });
    req.on("end", () => {
        const GPI_ARGS = JSON.parse(gpi_body);
        
        gpi_connect_auth(req, res, GPI_ARGS, async function(conn) {
            try {
                let gpi_sql = "INSERT INTO `products` (`";
                gpi_sql += GPI_ARGS.KEYS.join("`, `");
                gpi_sql += "`) VALUES ('";
    
                gpi_sql += GPI_ARGS.VALUES.map(function(el) {
                    return el.join("', '");
                }).join("'), ('");
    
                gpi_sql += "');";
                
                console.log(gpi_sql);
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
