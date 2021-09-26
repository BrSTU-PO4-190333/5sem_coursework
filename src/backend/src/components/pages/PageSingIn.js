require('dotenv').config();
const Authentication = require("./../Authentication.js");

function PageSingIn(request, response) {
    let body = "";
    request.on("data", chunk => {
        body += chunk.toString();
    });
    request.on("end", () => {
        let args = JSON.parse(body);
        console.log(args);

        Authentication(args, response);
    });
}

module.exports = PageSingIn;
