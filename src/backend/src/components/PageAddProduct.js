require('dotenv').config();
const GetUrlArgs = require("./GetUrlArgs.js");
const Authentication = require("./Authentication.js");

function PageAddProduct(req, res) {
    let UrlArgs = GetUrlArgs(req.params.GETargs);

    let object = {
        "Model": UrlArgs["Model"] ? UrlArgs["Model"] : "",
        "Name": UrlArgs["Name"] ? UrlArgs["Name"] : "",
        "NameRU": UrlArgs["NameRU"] ? UrlArgs["NameRU"] : "",
        "OnBox": parseInt(UrlArgs["OnBox"]) ? parseInt(UrlArgs["OnBox"]) : 0,
        "KG": parseFloat(UrlArgs["KG"]) ? parseFloat(UrlArgs["KG"]) : 0.0,
        "M3": parseFloat(UrlArgs["M3"]) ? parseFloat(UrlArgs["M3"]) : 0.0,
    };

    let sql = `INSERT INTO \`${process.env.MySQL_DATABASE}\`.\`products\``;
    sql += "(`Model`, `Name`, `NameRU`, `OnBox`, `KG`, `M3`) ";
    sql += `VALUES (`;
    sql += `'${object["Model"]}'`;
    sql += `,`;
    sql += `'${object["Name"]}'`;
    sql += `,`;
    sql += `'${object["NameRU"]}'`;
    sql += `,`;
    sql += `'${object["OnBox"]}'`;
    sql += `,`;
    sql += `'${object["KG"]}'`;
    sql += `,`;
    sql += `'${object["M3"]}'`;
    sql += `);`;

    Authentication(UrlArgs, res, function (res, connnection) {
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

module.exports = PageAddProduct;
