const express = require('express');
const router = express.Router();

const gpi_auth = require("../scripts/gpi_connect_auth");

router.get("/gpi_singin", function (req, res) {
    gpi_auth(req, res, async function (conn) {
        res.send("success");
    });
});

module.exports = router;
