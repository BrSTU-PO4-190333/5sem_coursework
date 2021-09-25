require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PageHome = require("./components/PageHome.js");
const PageGetProduct = require("./components/PageGetProduct.js");
const PageGetProducts = require("./components/PageGetProducts.js");
const PageAddProduct = require("./components/PageAddProduct.js");
const PageDeleteProduct = require("./components/PageDeleteProduct.js");
const PageUpdateProduct = require("./components/PageUpdateProduct.js");
const PageSingIn = require("./components/PageSingIn.js");

const app = express();
app.use(cors());
app.listen(process.env.NODEJS_LOCALE_PORT);
console.log(`Open ${process.env.NODEJS_BASEURL}:${process.env.NODEJS_LOCALE_PORT}/`);

app.get("/", (req, res) => PageHome(req, res));
app.get("/get-product/:GETargs", (req, res) => PageGetProduct(req, res));
app.get("/get-products/:GETargs", (req, res) => PageGetProducts(req, res));
app.post("/add-product", (request, response) => PageAddProduct(request, response));
app.get("/delete-product/:GETargs", (req, res) => PageDeleteProduct(req, res));
app.get("/update-product/:GETargs", (req, res) => PageUpdateProduct(req, res));
app.get("/sing-in/:GETargs", (req, res) => PageSingIn(req, res));
