require('dotenv').config();
const gpi_authentication = require("./gpi_authentication");

module.exports = function (request, response) {
    let body = "";
    request.on("data", chunk => {
        body += chunk.toString();
    });
    request.on("end", () => {
        let args = JSON.parse(body);
        console.log(args);

        gpi_authentication(args, response);
    });
}
