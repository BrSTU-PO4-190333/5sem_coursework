require('dotenv').config();
const GetUrlArgs = require("./GetUrlArgs.js");
const Authentication = require("./Authentication.js");

function PageUpdateProduct(req, res) {
    let UrlArgs = GetUrlArgs(req.params.GETargs);
    Authentication(UrlArgs, res, function (res, connnection) {
        let object = {
            "ID": parseInt(UrlArgs["ID"]) ? parseInt(UrlArgs["ID"]) : 0,
            "Model": UrlArgs["Model"] ? UrlArgs["Model"] : "",
            "Name": UrlArgs["Name"] ? UrlArgs["Name"] : "",
            "NameRU": UrlArgs["NameRU"] ? UrlArgs["NameRU"] : "",
            "OnBox": parseInt(UrlArgs["OnBox"]) ? parseInt(UrlArgs["OnBox"]) : 0,
            "KG": parseFloat(UrlArgs["KG"]) ? parseFloat(UrlArgs["KG"]) : 0.0,
            "M3": parseFloat(UrlArgs["M3"]) ? parseFloat(UrlArgs["M3"]) : 0.0,
        };

        let sql = `UPDATE \`${process.env.MySQL_DATABASE}\`.\`products\``;
        sql += ` SET \`Model\`='${object["Model"]}'`;
        sql += `, `;
        sql += `\`Name\`='${object["Name"]}'`;
        sql += `, `;
        sql += `\`NameRU\`='${object["NameRU"]}'`;
        sql += `, `;
        sql += `\`OnBox\`='${object["OnBox"]}'`;
        sql += `, `;
        sql += `\`KG\`='${object["KG"]}'`;
        sql += `, `;
        sql += `\`M3\`='${object["M3"]}'`;
        sql += ` WHERE products.ID = ${object["ID"]}`;

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

module.exports = PageUpdateProduct;
