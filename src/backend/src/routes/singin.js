const express = require('express');
const router = express.Router();

const gpi_connect_auth = require("../scripts/gpi_connect_auth");

router.post("/singin", function (req, res) {
    let gpi_body = "";
    req.on("data", chunk => {
        gpi_body += chunk.toString();
    });
    req.on("end", () => {
        const GPI_ARGS = JSON.parse(gpi_body);
        
        gpi_connect_auth(req, res, GPI_ARGS, async function(conn) {
            res.send("success");
        });
    });
});

module.exports = router;
