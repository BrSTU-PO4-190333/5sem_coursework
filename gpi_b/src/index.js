// gpi_ Library
const gpi_dotenv = require('dotenv')
const gpi_express = require('express');
const gpi_cors = require('cors');
const gpi_router_auth = require('./routes/gpi_router_auth');
const gpi_router_products = require('./routes/gpi_router_products');

// gpi Init
gpi_dotenv.config();
const gpi_app = gpi_express();
gpi_app.use(gpi_cors());

// gpi_ Start server
gpi_app.listen(process.env.gpi_nodejs_port);
console.log(`Open ${process.env.gpi_nodejs_baseurl}:${process.env.gpi_nodejs_port}/`);

// gpi_ Home
gpi_app.get("/", function (req, res) {
    res.send('Hello, World!');
});

// gpi_ Auth
gpi_app.use("/", gpi_router_auth);

// gpi_ Products
gpi_app.use("/", gpi_router_products);
