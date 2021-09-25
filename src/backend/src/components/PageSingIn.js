require('dotenv').config();
const Auth = require("./Authentication.js");
const GetUrlArgs = require("./GetUrlArgs.js");

function PageGetAdmins(req, res) {
    let UrlArgs = GetUrlArgs(req.params.GETargs);
    Auth(UrlArgs, res);
}

module.exports = PageGetAdmins;
