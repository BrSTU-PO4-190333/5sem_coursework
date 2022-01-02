// gpi_ Подключаем библиотеки
const gpi_express = require('express');

const gpi_dotenv = require('dotenv')
const gpi_auth = require('./gpi_auth_script');
const gpi_Query = require('./../scripts/gpi_Query');

// gpi_ Производим инициализацию
const gpi_router = gpi_express.Router();
gpi_dotenv.config();

gpi_router.get("/gpi_auth", async function (gpi_request, gpi_response) {
    const gpi_obj = new gpi_Query('root', 'root');
    const gpi_res = await gpi_obj.gpi_get_products();
    gpi_response.send(gpi_res);
});

gpi_router.post("/gpi_get_products", async function (gpi_request, gpi_response) {
    let gpi_string_body = "";
    
    // gpi_ Собираю тело из кусочков файла
    gpi_request.on("data", function (gpi_chuck) {
        gpi_string_body += gpi_chuck.toString();
    });

    // gpi_ Когда у нас готовая строка тела
    gpi_request.on("end", async function () {
        const gpi_POST = gpi_get_POST(gpi_string_body);

        const gpi_obj = new gpi_Query(gpi_POST.gpi_login, gpi_POST.gpi_password);
        const gpi_res = await gpi_obj.gpi_get_products();
        gpi_response.send(gpi_res);
    });
});

// gpi_ Функция получает JS объект из тела POST
function gpi_get_POST(gpi_string_body) {
    try {
        gpi_args = JSON.parse(gpi_string_body);
    }
    // gpi_ Если в теле POST не JS объект
    catch (error) {
        return {};
    }

    // gpi_ Если в теле POST число
    if (typeof gpi_args == 'number') {
        return {};
    }

    return gpi_args;
}

// async function gpi_q() {
//     const config = require("./../gpi_mysql_config");
//     console.log(config);


//     // let config = {
//     //     host: 'localhost',
//     //     user: 'SomeUser',
//     //     password: 'SomePassword',
//     //     database: 'database',
//     // };



//     try {
//         // Connecting to the database
//         const conn = await gpi_mysql.createConnection(config);

//         // We get a login and password
//         const gpi_SQL = gpi_mysql.format("SELECT * FROM `products`");
//         const rows = await conn.execute(gpi_SQL);
//         console.log(rows)
//     } catch (error) {
//         console.log(error);
//     }
// }

module.exports = gpi_router;
