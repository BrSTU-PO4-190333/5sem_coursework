require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.listen(process.env.NODEJS_LOCALE_PORT);
console.log(`Open ${process.env.NODEJS_BASEURL}:${process.env.NODEJS_LOCALE_PORT}/`);

// Hello, World!
app.get("/", function (req, res) {
    res.send('Hello, World!');
});

// Auth
app.use("/", require("./routes/singin"));

// Products
app.use("/", require("./routes/gpi_get_products"));
app.use("/", require("./routes/gpi_add_products"));
app.use("/", require("./routes/gpi_delete_product_where_id"));
