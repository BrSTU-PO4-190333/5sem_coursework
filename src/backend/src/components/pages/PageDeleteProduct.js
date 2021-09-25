require('dotenv').config();
const GetUrlArgs = require("./../GetUrlArgs.js");
const Authentication = require("./../Authentication.js");

function PageDeleteProduct(req, res) {
    let UrlArgs = GetUrlArgs(req.params.GETargs);

    let sql = `DELETE FROM \`${process.env.MySQL_DATABASE}\`.\`products\` WHERE ID=${UrlArgs["id"]};`;

    Authentication(UrlArgs, res, function(res, connnection) {
        connnection.query(sql, function (error, results, fields) {
            connnection.end();
            if (error) {
                connnection.end();
                console.log(error);
                return error;
            }
            res.sendStatus(200);
        });
    });
}

module.exports = PageDeleteProduct;
