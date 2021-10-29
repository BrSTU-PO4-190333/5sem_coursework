require('dotenv').config();
const express = require('express');
const cors = require('cors');

const gpi_product_get = require("./gpi_product_get");
const gpi_products_get = require("./gpi_products_get");
const gpi_product_add = require("./gpi_product_add");
const gpi_product_delete = require("./gpi_product_delete");
const gpi_product_update = require("./gpi_product_update");
const gpi_singin = require("./gpi_singin");
const gpi_singup = require("./gpi_singup");

const app = express();
app.use(cors());
app.listen(process.env.NODEJS_LOCALE_PORT);
console.log(`Open ${process.env.NODEJS_BASEURL}:${process.env.NODEJS_LOCALE_PORT}/`);

app.get("/", function(req, res) {
    res.send('Hello, World!');
});
app.post("/get-product", gpi_product_get);
app.post("/get-products", gpi_products_get);
app.post("/add-product", gpi_product_add);
app.post("/delete-product", gpi_product_delete);
app.post("/update-product", gpi_product_update);
app.post("/sing-in", gpi_singin);
app.post("/sing-up", gpi_singup);
